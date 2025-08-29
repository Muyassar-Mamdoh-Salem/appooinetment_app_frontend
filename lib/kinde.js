import { KindeClient } from "@kinde-oss/kinde-auth-nextjs";

const {
  KINDE_CLIENT_ID,
  KINDE_CLIENT_SECRET,
  KINDE_ISSUER_URL,
  KINDE_SITE_URL,
  KINDE_POST_LOGOUT_REDIRECT_URL,
  KINDE_POST_LOGIN_REDIRECT_URL,
} = process.env;

if (!KINDE_CLIENT_ID || !KINDE_CLIENT_SECRET || !KINDE_ISSUER_URL) {
  throw new Error("Missing Kinde environment variables!");
}

const kindeClient = new KindeClient({
  clientId: KINDE_CLIENT_ID,
  clientSecret: KINDE_CLIENT_SECRET,
  issuer: KINDE_ISSUER_URL,
  site: KINDE_SITE_URL, // هنا لازم يكون URL الأساسي للـ app (localhost أو Vercel)
  postLogoutRedirectUri: KINDE_POST_LOGOUT_REDIRECT_URL,
  postLoginRedirectUri: KINDE_POST_LOGIN_REDIRECT_URL,
});

export default kindeClient;
