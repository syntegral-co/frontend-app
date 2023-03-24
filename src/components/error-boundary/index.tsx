import React from 'react'

class ErrorBoundary extends React.Component<
  { children: JSX.Element },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('error: ', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='mx-auto max-w-7xl p-2 sm:p-6 lg:p-8'>
          <h1 className='text-center text-xl font-bold'>Oops!</h1>
          <div className='text-center'>
            <p>Sorry, an unexpected error has occurred.</p>
            <a href='/'>Go home</a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
