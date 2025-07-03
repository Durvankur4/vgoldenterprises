declare module "*.jpg" {
  const value: string;
  export default value;
}
// src/vite-env.d.ts
/// <reference types="vite/client" />

// Allow importing .png, .jpg, .svg, etc. as URLs
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
declare module '*.webp';
