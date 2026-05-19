// worker-configuration.d.ts は pnpm typegen で自動生成されるため、
// wrangler secret で管理するシークレットの型はここで手動拡張する
interface Env {
  SIGNED_URL_SECRET: string;
}
