import type { NextConfig } from "next";
const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
