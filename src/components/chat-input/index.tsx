import { FormEvent, useState } from 'react'
import { z, ZodFormattedError } from 'zod'
import { useDrawer } from '../drawer/hooks'
import { useChatBot } from './hooks'

const chatSchema = z.object({
  text: z.string(),
})

function ChatInput() {
  const [formErrors, setFormErrors] = useState<
    ZodFormattedError<typeof chatSchema>
  >({} as ZodFormattedError<typeof chatSchema>)

  const { sendMessage } = useChatBot()
  const { toggleDrawer } = useDrawer()

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formObject = Object.fromEntries(formData.entries())

    const parsedResults = chatSchema.safeParse(formObject)

    if (!parsedResults.success) {
      setFormErrors(parsedResults.error.format())
      return
    }

    event.currentTarget.reset()

    sendMessage({
      author: 'current',
      avatar: null,
      text: parsedResults.data.text,
    })

    setFormErrors({} as ZodFormattedError<typeof chatSchema>)
  }

  return (
    <form
      onSubmit={submitForm}
      className='relative flex w-full flex-row flex-nowrap gap-2 px-4'
    >
      <input
        className='input w-full rounded-none bg-base-200'
        type='text'
        name='text'
        placeholder="What's on your mind?"
      />
      <button
        className='btn absolute right-4 gap-2 rounded-none border-none'
        type='submit'
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          color='currentColor'
        >
          <path d='M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z' fill='currentColor' />
          <path
            d='M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z'
            fill='currentColor'
          />
        </svg>
      </button>
    </form>
  )
}

export default ChatInput
