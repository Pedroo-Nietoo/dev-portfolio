export const ArticleImage = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <figure className="my-10 flex flex-col items-center justify-center">
    <div className="article-thumb-frame overflow-hidden rounded-lg border border-white/[0.14] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.45)]">
      <img src={src} alt={alt} className="block h-auto max-w-full" />
    </div>
    {caption && (
      <figcaption className="mt-4 text-center text-[15px] text-neutral-400">
        {caption}
      </figcaption>
    )}
  </figure>
);

