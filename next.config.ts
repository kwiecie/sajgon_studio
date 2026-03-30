import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack(config) {
  // // find existing rule for SVG
  // const fileLoaderRule = config.module.rules.find((rule: any) =>
  //   rule.test?.test?.(".svg"),
  // );
  // // exclude svg from default loader
  // fileLoaderRule.exclude = /\.svg$/i;
  // // add SVGR
  // config.module.rules.push({
  //   test: /\.svg$/i,
  //   issuer: fileLoaderRule.issuer,
  //   use: ["@svgr/webpack"],
  // });
  // return config;
  //},
};

export default nextConfig;
