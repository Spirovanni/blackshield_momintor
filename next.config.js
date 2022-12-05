/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa");
const nextTranslate = require("next-translate");
// const nextConfig = {
//   reactStrictMode: true
// }

module.exports = nextTranslate(
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === "development",
        // dest: 'public',
        register: true,
        sw: "/sw.js"
      },
      sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
      },
      env: {

      }
    })
);
