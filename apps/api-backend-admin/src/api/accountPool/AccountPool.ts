export type AccountPool = {
  assignedAt: Date | null;
  assignedToUserId: string | null;
  createdAt: Date;
  id: string;
  notes: string | null;
  passwordEnc: string | null;
  status?: "Option1" | null;
  totpSecretEnc: string | null;
  updatedAt: Date;
  username: string | null;
};
