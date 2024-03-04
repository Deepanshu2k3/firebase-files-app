import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers as needed
  ],
  // Specify a secret for NextAuth.js to use
  secret: process.env.NEXTAUTH_SECRET,
  // Add other options as needed
};

export default NextAuth(options);
    