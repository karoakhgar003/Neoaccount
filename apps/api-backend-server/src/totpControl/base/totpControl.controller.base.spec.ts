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
import { TotpControlController } from "../totpControl.controller";
import { TotpControlService } from "../totpControl.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  blockedUntil: new Date(),
  createdAt: new Date(),
  deviceHash: "exampleDeviceHash",
  id: "exampleId",
  totpCount7d: 42,
  totpCountDay: 42,
  totpLastIssuedAt: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  blockedUntil: new Date(),
  createdAt: new Date(),
  deviceHash: "exampleDeviceHash",
  id: "exampleId",
  totpCount7d: 42,
  totpCountDay: 42,
  totpLastIssuedAt: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    blockedUntil: new Date(),
    createdAt: new Date(),
    deviceHash: "exampleDeviceHash",
    id: "exampleId",
    totpCount7d: 42,
    totpCountDay: 42,
    totpLastIssuedAt: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  blockedUntil: new Date(),
  createdAt: new Date(),
  deviceHash: "exampleDeviceHash",
  id: "exampleId",
  totpCount7d: 42,
  totpCountDay: 42,
  totpLastIssuedAt: new Date(),
  updatedAt: new Date(),
};

const service = {
  createTotpControl() {
    return CREATE_RESULT;
  },
  totpControls: () => FIND_MANY_RESULT,
  totpControl: ({ where }: { where: { id: string } }) => {
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

describe("TotpControl", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TotpControlService,
          useValue: service,
        },
      ],
      controllers: [TotpControlController],
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

  test("POST /totpControls", async () => {
    await request(app.getHttpServer())
      .post("/totpControls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        blockedUntil: CREATE_RESULT.blockedUntil.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        totpLastIssuedAt: CREATE_RESULT.totpLastIssuedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /totpControls", async () => {
    await request(app.getHttpServer())
      .get("/totpControls")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          blockedUntil: FIND_MANY_RESULT[0].blockedUntil.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          totpLastIssuedAt: FIND_MANY_RESULT[0].totpLastIssuedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /totpControls/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/totpControls"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /totpControls/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/totpControls"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        blockedUntil: FIND_ONE_RESULT.blockedUntil.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        totpLastIssuedAt: FIND_ONE_RESULT.totpLastIssuedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /totpControls existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/totpControls")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        blockedUntil: CREATE_RESULT.blockedUntil.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        totpLastIssuedAt: CREATE_RESULT.totpLastIssuedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/totpControls")
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
