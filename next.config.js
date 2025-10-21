/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.module.rules.push(
      {
        test: /\.(gltf)$/,
        loader: "gltf-loader",
        /**
         * @type {import("gltf-loader").GLTFLoaderOptions}
         */
        options: {
          uriResolver: (module) => {
            let result = module.default ?? module;
            // Use the "src" property returned by the `next-image-loader` if present:
            if (typeof result === "object" && "src" in result)
              result = result.src;
            return result;
          },
        },
      },
      {
        test: /\.(bin)$/,
        type: "asset/resource",
      },
    );
    return config;
  },

};
