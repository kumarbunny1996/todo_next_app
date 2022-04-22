/* eslint-disable import/no-anonymous-default-export */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: {
    type: "mongodb",
    database: ":memory:",
    synchronize: true,
  },
  // theme: {
  //   colorScheme: "light",
  //   logo: "/logopng.png",
  // },
  callbacks: {
    async jwt({ token }) {
      console.log(token);
      token.userRole = "admin";
      return token;
    },
  },
  // pages: {
  //   signOut: "/login",
  //   error: "/auth/error",
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};

export default (req, res) => NextAuth(req, res, options);
