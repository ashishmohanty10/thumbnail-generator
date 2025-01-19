import "./src/env.js";
import path from "path";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "onnxruntime-web": false,
    };

    config.module.rules.push({
      test: /node_modules\/@imgly\/background-removal/,
      use: "null-loader",
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "onnxruntime-web": path.resolve("./node_modules/onnxruntime-web"),
      "onnxruntime-web/webgpu": path.resolve(
        "./node_modules/onnxruntime-web/dist/webgpu",
      ),
    };

    return config;
  },
};

export default config;
