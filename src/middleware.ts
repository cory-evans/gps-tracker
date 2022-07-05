import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      console.log(token);
      if (token) {
        return true;
      }

      return false;
    },
  },
});

export const config = {
  matcher: ['/map'],
};
