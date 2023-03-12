import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z, ZodFormattedError } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  remember: z.coerce.boolean().optional(),
})

function SignIn() {
  const [formErrors, setFormErrors] = useState<
    ZodFormattedError<typeof signInSchema>
  >({} as ZodFormattedError<typeof signInSchema>)
  const navigate = useNavigate()

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formObject = Object.fromEntries(formData.entries())

    const parsedResults = signInSchema.safeParse(formObject)

    if (!parsedResults.success) {
      setFormErrors(parsedResults.error.format())
      return
    }

    setFormErrors({} as ZodFormattedError<typeof signInSchema>)
    navigate('/demo')
  }

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='/syntegral.png'
            alt='Syntegral'
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-white'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={submitForm}>
          <input type='hidden' name='remember' value='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='relative block w-full rounded-t-md border-0 py-1.5 px-2 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:z-10 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                placeholder='Email address'
              />
              <small className='italic text-white'>
                {formErrors?.email?._errors.join(',', '') || ''}
              </small>
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='placeholder:text-gray-400 relative block w-full rounded-b-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                placeholder='Password'
              />
              <small className='italic text-white'>
                {formErrors?.password?._errors.join(',', '') || ''}
              </small>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-white'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a
                href='#'
                className='hover:text-teal-500 font-medium text-teal-600'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='focus-visible:outline-transparent group relative flex w-full justify-center rounded-md bg-teal-600 py-2 px-3 text-sm font-semibold text-white hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  className='text-teal-500 group-hover:text-teal-400 h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
