export type ErrorResponse = {
  ok: false;
  reason: string;
  message: string;
};

export type KeyUsageLog = {
  timestamp: string;
  ipAddress: string | null;
  userAgent: string | null;
  success: boolean;
  reason?: string;
};

export type DownloadKeyRecord = {
  productId: string;
  isActive: boolean;
  expiresAt: string;
  maxUseCount: number;
  useCount: number;
  usageLogs: KeyUsageLog[];
};

export type ValidateKeySuccessResponse = {
  ok: true;
  key: string;
  productId: string;
  downloadUrl: string;
};

export type ValidateKeyResponse = ValidateKeySuccessResponse | ErrorResponse;

export type ValidateKeyFailureReason =
  | "BAD_REQUEST"
  | "KEY_NOT_FOUND"
  | "KEY_NOT_AVAILABLE";

export type SignedDownloadFailureReason =
  | "BAD_REQUEST"
  | "EXPIRED"
  | "INVALID_SIGNATURE"
  | "KEY_NOT_FOUND"
  | "FILE_NOT_FOUND";
