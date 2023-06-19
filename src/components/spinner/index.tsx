function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center text-center text-accent">
      <span className="loading loading-spinner loading-lg"></span>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
