import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AccountPoolController } from "../accountPool.controller";
import { AccountPoolService } from "../accountPool.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  assignedAt: new Date(),
  assignedToUserId: "exampleAssignedToUserId",
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  passwordEnc: "examplePasswordEnc",
  totpSecretEnc: "exampleTotpSecretEnc",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const CREATE_RESULT = {
  assignedAt: new Date(),
  assignedToUserId: "exampleAssignedToUserId",
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  passwordEnc: "examplePasswordEnc",
  totpSecretEnc: "exampleTotpSecretEnc",
  updatedAt: new Date(),
  username: "exampleUsername",
};
const FIND_MANY_RESULT = [
  {
    assignedAt: new Date(),
    assignedToUserId: "exampleAssignedToUserId",
    createdAt: new Date(),
    id: "exampleId",
    notes: "exampleNotes",
    passwordEnc: "examplePasswordEnc",
    totpSecretEnc: "exampleTotpSecretEnc",
    updatedAt: new Date(),
    username: "exampleUsername",
  },
];
const FIND_ONE_RESULT = {
  assignedAt: new Date(),
  assignedToUserId: "exampleAssignedToUserId",
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  passwordEnc: "examplePasswordEnc",
  totpSecretEnc: "exampleTotpSecretEnc",
  updatedAt: new Date(),
  username: "exampleUsername",
};

const service = {
  createAccountPool() {
    return CREATE_RESULT;
  },
  accountPools: () => FIND_MANY_RESULT,
  accountPool: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AccountPool", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccountPoolService,
          useValue: service,
        },
      ],
      controllers: [AccountPoolController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /accountPools", async () => {
    await request(app.getHttpServer())
      .post("/accountPools")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        assignedAt: CREATE_RESULT.assignedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /accountPools", async () => {
    await request(app.getHttpServer())
      .get("/accountPools")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          assignedAt: FIND_MANY_RESULT[0].assignedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /accountPools/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accountPools"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accountPools/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accountPools"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        assignedAt: FIND_ONE_RESULT.assignedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /accountPools existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accountPools")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        assignedAt: CREATE_RESULT.assignedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/accountPools")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
