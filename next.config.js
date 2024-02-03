/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // useFileSystemPublicRoutes: false,
  reactStrictMode: true,
  // serverDataTimeout: 160000
  staticPageGenerationTimeout: 10000,
  cache: {
    size: 100 * 1024 * 1024, // Maximum cache size in bytes (e.g., 100 MB)
  },
  env: {
    debug: false,
  },

  async redirects() {
    return [
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/registerinfo",
        destination: "/register",
        permanent: true,
      },
      // {
      //   source: "/termsofservice",
      //   destination: "/terms-of-service",
      //   permanent: true,
      // },
      // {
      //   source: "/privacypolicy",
      //   destination: "/privacypolicy",
      //   permanent: true,
      // },
      {
        source: "/register/startnow",
        destination: "/register",
        permanent: true,
      },
      // {
      //   source:
      //     "/pos-system-how-can-the-right-one-help-improve-a-small-business",
      //   destination:
      //     "/blogs/pos-system-how-can-the-right-one-help-improve-a-small-business",
      //   permanent: true,
      // },
      // {
      //   source: "/lucapary",
      //   destination: "/lucapay",
      //   permanent: true,
      // },
      // {
      //   source: "/trace",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/enquire",
      //   destination: "/enquiry",
      //   permanent: true,
      // },
      // {
      //   source: "/storelist.html",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/build-manifest.json",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/package.json",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/react-loadable-manifest.json",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/server.js",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/home",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
      // {
      //   source: "/register/startnow",
      //   destination: "/register",
      //   permanent: true,
      // },
      // {
      //   source: "/partners",
      //   destination: "https://posapt.au",
      //   permanent: true,
      // },
    ];
  },
};

// module.exports = {
//   // time in seconds of no pages generating during static
//   // generation before timing out
//   staticPageGenerationTimeout: 1000,
// }

module.exports = nextConfig;
