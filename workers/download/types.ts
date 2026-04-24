export type DownloadEnv = Env & {
  aotakeuma_keys: KVNamespace;
  aotakeuma_contents: R2Bucket;
  SIGNED_URL_SECRET: string;
};

export type ValidationFailureReason =
  | "BAD_REQUEST"
  | "KEY_NOT_FOUND"
  | "KEY_NOT_AVAILABLE";

export type KeyUsageLog = {
  timestamp: string;
  ipAddress: string | null;
  userAgent: string | null;
  success: boolean;
  reason?: ValidationFailureReason;
};

export type DownloadKeyRecord = {
  productId: string;
  isActive: boolean;
  expiresAt: string;
  maxUseCount: number;
  useCount: number;
  usageLogs: KeyUsageLog[];
};

export type ValidateResponseSuccess = {
  ok: true;
  key: string;
  productId: string;
  downloadUrl: string;
};

export type ValidateResponseFailure = {
  ok: false;
  reason: ValidationFailureReason;
  message: string;
};

export type ValidateResponse =
  | ValidateResponseSuccess
  | ValidateResponseFailure;
