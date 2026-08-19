export const BlogImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
 <figure className="my-10 flex flex-col items-center justify-center">
  <img
   src={src}
   alt={alt}
   className="max-w-full h-auto"
  />
  {caption && (
   <figcaption className="mt-4 text-[15px] text-[#444] text-center">
    {caption}
   </figcaption>
  )}
 </figure>
);