/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx"],

  i18n: {
    locales: ["en-US", "bg"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
