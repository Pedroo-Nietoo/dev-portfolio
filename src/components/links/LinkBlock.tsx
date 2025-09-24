type LinkProps = {
  text: string;
  url: string;
};

export function LinkBlock({ text, url }: LinkProps) {
  return (
    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-4 sm:px-6 py-3 sm:py-4 
        bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
        text-center text-base sm:text-lg md:text-xl font-semibold text-white 
        shadow-md hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] 
        transition-all duration-200"
      >
        {text}
      </a>
    </div>
  );
}
