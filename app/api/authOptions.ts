import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";

export const options: any = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Return null if user data could not be retrieved
        const user: any = {
          token: "",
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      return true;
    },
    async jwt({ token, account, user, trigger, session }) {
      // console.log(session, trigger);
      if (trigger == "update") {
        token.activeNavItem = session.activeNavItem;
        if (session.email && session.password) {
          token.email = session.email;
          token.password = session.password;
        }
        if (session.updateType == "LOGOUT") {
          token.email = "";
          token.password = "";
        }
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("token", token);
      session.user.email = token.email || "";
      session.user.password = token.password || "";
      return {
        ...session,
        activeNavItem: token.activeNavItem || "home",
        text: "#FFFFFF", // White Text
        primary: "#3498DB", // Blue
        secondary: "#2ECC71", // Green
        accent: "#ff2b64", // Red
        neutral: "#BDC3C7", // Light Gray
      };
    },
  },
};
export const getAuthSession = () => getServerSession(options);
