function Loader() {
  return (
    <div className="mt-2 flex h-5 w-20 flex-row items-center justify-center gap-2">
      <div className="h-2 w-2 animate-loader rounded-full bg-accent"></div>
      <div className="animation-delay-200 h-2 w-2 animate-loader rounded-full bg-accent"></div>
      <div className="animation-delay-400 h-2 w-2 animate-loader rounded-full bg-accent"></div>
      <div className="animation-delay-600 h-2 w-2 animate-loader rounded-full bg-accent"></div>
    </div>
  );
}

export default Loader;
