import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { organization } from "better-auth/plugins";
import { apiKey } from "better-auth/plugins";
import { admin } from "better-auth/plugins";


export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [apiKey(), organization(), admin()],
});
