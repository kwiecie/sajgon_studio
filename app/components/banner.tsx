type Banner = {
  title: string;
};

export default function Banner({ title }: Banner) {
  return (
    <div className="bg-[#F29AB5] w-full h-17 flex items-center justify-end relative">
      <h2 className="text-8xl md:pl-16 pt-5 pr-4 text-background lowercase font-halfre">
        {title}
      </h2>
    </div>
  );
}
