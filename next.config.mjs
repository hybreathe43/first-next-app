/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/users",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
