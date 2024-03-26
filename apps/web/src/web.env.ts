import type { NodeEnv } from '@/validation/env.validation';

const env = process.env;
export class WebEnv {
  static NODE_ENV: NodeEnv = env.NODE_ENV;
  static SERVER_DOMAIN = env.SERVER_DOMAIN;
}
