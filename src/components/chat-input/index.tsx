import { FormEvent, useState } from 'react'
import { useChatBot } from './hooks'
import { z, ZodFormattedError } from 'zod'

const chatSchema = z.object({
  text: z.string().min(1),
})

function ChatInput() {
  const [formErrors, setFormErrors] = useState<ZodFormattedError<typeof chatSchema>>(
    {} as ZodFormattedError<typeof chatSchema>,
  )

  const { sendMessage } = useChatBot()

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formObject = Object.fromEntries(formData.entries())

    const parsedResults = chatSchema.safeParse(formObject)

    if (!parsedResults.success) {
      setFormErrors(parsedResults.error.format())
      return
    }

    sendMessage(parsedResults.data.text)
    event.currentTarget.reset()

    setFormErrors({} as ZodFormattedError<typeof chatSchema>)
  }

  return (
    <form onSubmit={submitForm} className="relative flex w-full flex-row flex-nowrap gap-2 shadow-md">
      <textarea
        className="textarea h-8 w-full resize-none rounded-md bg-base-100"
        name="text"
        placeholder="What's on your mind?"
      />
      <button className="btn absolute right-0 gap-2 rounded-md rounded-l-none border-none text-accent" type="submit">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="currentColor" />
          <path
            d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  )
}

export default ChatInput
