/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental'
  },
  rewrites: async () => {
    return [
      {
        source: '/login',
        destination: '/pages/login',
      },
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
      {
        source: '/dashboard/invoices/create',
        destination: '/pages/dashboard/invoices/create',
      },
      {
        source: '/dashboard/invoices/:id/edit',
        destination: '/pages/dashboard/invoices/:id/edit',
      },
    ];
  }
};

export default nextConfig;