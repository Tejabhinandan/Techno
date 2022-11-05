/* eslint-disable no-param-reassign */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
      authorize(credentials) {
        if (credentials) {
          console.log("credentials", credentials);
          return {
            email: "pmathul1@gmail.com",
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/service/login",
    error: "/erro",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log(token, "token");
      console.log(user, "user");
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token?.email) {
        session.email = token.email;
      }
      return session;
    },

    redirect: async ({ url, baseUrl }) => {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: "123",
  jwt: { secret: "123", encryption: true },
};

export default async function auth(req, res) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  // eslint-disable-next-line no-return-await
  return await NextAuth(req, res, options);
}
