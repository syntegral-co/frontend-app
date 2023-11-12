function Error() {
  return (
    <div className="mx-auto max-w-7xl p-2 sm:p-6 lg:p-8">
      <h1 className="text-teal font-maven font-bold text-2xl md:text-3xl">
        Oops!
      </h1>
      <div className="text-center">
        <p>Sorry, an unexpected error has occurred.</p>
        <a href="/">Go home</a>
      </div>
    </div>
  )
}

export default Error
