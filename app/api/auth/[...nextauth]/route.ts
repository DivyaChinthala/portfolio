import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: any = {
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
      if (trigger == "update") {
        token.activeNavItem = session.activeNavItem;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        activeNavItem: token.activeNavItem || "",
        primaryColor: "#a991f7",
      };
    },
  },
};
const handler = NextAuth(options);

export const getAuthSession = () => getServerSession(options);
export { handler as GET, handler as POST };
