import imagePart1 from "../archive-002/image-part-1";
import imagePart2 from "../archive-002/image-part-2";
import imagePart3 from "../archive-002/image-part-3";
import imagePart4 from "../archive-002/image-part-4";
import imagePart5 from "../archive-002/image-part-5";

export const dynamic = "force-static";

const archiveImage = imagePart1 + imagePart2 + imagePart3 + imagePart4 + imagePart5;

export function GET() {
  return new Response(Buffer.from(archiveImage, "base64"), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
