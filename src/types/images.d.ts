// The CRA app this project was migrated from was authored on a case-insensitive
// Windows filesystem, so many asset files use uppercase extensions (e.g. `.JPG`).
// Next.js's built-in ambient module declarations (next/image-types/global) only
// cover lowercase extensions, so static imports of those files need these too.

declare module "*.JPG" {
  const content: import("next/dist/shared/lib/image-external").StaticImageData;
  export default content;
}

declare module "*.JPEG" {
  const content: import("next/dist/shared/lib/image-external").StaticImageData;
  export default content;
}

declare module "*.PNG" {
  const content: import("next/dist/shared/lib/image-external").StaticImageData;
  export default content;
}

declare module "*.GIF" {
  const content: import("next/dist/shared/lib/image-external").StaticImageData;
  export default content;
}

declare module "*.WEBP" {
  const content: import("next/dist/shared/lib/image-external").StaticImageData;
  export default content;
}
