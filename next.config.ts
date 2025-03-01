import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"ik.imagekit.io"
      },
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      },
      {
        protocol:"https",
        hostname:"img.icons8.com"
      },
      {
        protocol:"https",
        hostname:"images.opencollective.com"
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
