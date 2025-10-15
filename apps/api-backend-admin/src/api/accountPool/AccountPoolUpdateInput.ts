export type AccountPoolUpdateInput = {
  assignedAt?: Date | null;
  assignedToUserId?: string | null;
  notes?: string | null;
  passwordEnc?: string | null;
  status?: "Option1" | null;
  totpSecretEnc?: string | null;
  username?: string | null;
};
