import { KindeClient } from '@kinde-oss/kinde-auth-js';

export const client = new KindeClient({
  clientId: process.env.KINDE_CLIENT_ID,
  issuer: process.env.KINDE_ISSUER_URL,
  redirectUri: process.env.KINDE_SITE_URL,
  postLogoutRedirectUri: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});
