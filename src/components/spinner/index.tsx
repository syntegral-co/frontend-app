type SpinnerProps = {
  context?: string
}

function Spinner({ context }: SpinnerProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <div className="text-accent">
        <span className="loading loading-spinner loading-lg"></span>
        <span className="sr-only">Loading...</span>
      </div>
      {context && <p>Loading {context}...</p>}
    </div>
  )
}

export default Spinner
