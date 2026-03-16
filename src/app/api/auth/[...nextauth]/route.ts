import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Admin Login',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'admin' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Hardcoded admin username, password from env
        const adminUser = 'admin';
        const adminPass = process.env.ADMIN_PASSWORD || 'Subh@2026';

        if (
          credentials?.username === adminUser &&
          credentials?.password === adminPass
        ) {
          return { id: '1', name: 'Admin', email: 'admin@subhconstruction.com' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-dev-only',
});

export { handler as GET, handler as POST };
