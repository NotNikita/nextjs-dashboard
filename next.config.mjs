/** @type {import('next').NextConfig} */

const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/dashboard',
            destination: '/pages/dashboard',
          },
          {
            source: '/dashboard/customers',
            destination: '/pages/dashboard/customers',
          },
          {
            source: '/dashboard/invoices',
            destination: '/pages/dashboard/invoices',
          },
        ]
      }
};

export default nextConfig;
