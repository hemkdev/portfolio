function Hero({ value }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between gap-8 px-6 py-12">
      <h1 className="text-left text-2xl font-semibold leading-tight md:text-3xl">
        Hello, I'm Lucas Hemkemeier
      </h1>
      <img
        src="https://github.com/hemkdev.png"
        alt="Lucas Hemkemeier"
        className="h-40 w-40 shrink-0 rounded-2xl object-cover"
      />
    </div>
  );
}

export default Hero;
