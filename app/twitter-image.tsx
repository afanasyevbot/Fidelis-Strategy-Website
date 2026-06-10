// Twitter card image — same look as the OG image, served separately at /twitter-image.
// Re-exporting the route segment config (runtime) isn't allowed, so each value is declared inline.
export { default } from "./opengraph-image";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Fidelis Strategy — Growth strategy. And the systems built to run it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
