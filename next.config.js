// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! 프로덕션 빌드 시 타입 체크 활성화
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
