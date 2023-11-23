import { FormEvent, KeyboardEvent, useRef, useState } from 'react'
import { useChatBot } from './hooks'
import { z, ZodFormattedError } from 'zod'
import clsx from 'clsx'
import Icon from '../icon'

const chatSchema = z.object({
  text: z.string().min(2),
})

const chatSchemaShape = chatSchema.shape

function ChatInput() {
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const [formErrors, setFormErrors] = useState<
    ZodFormattedError<typeof chatSchemaShape>
  >({} as ZodFormattedError<typeof chatSchemaShape>)

  const { sendMessage, startNewChat } = useChatBot()

  const handleKeyDownEvent = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!submitButtonRef.current) return

    if (event.key === 'Enter' && !event.shiftKey) {
      submitButtonRef.current.click()
      const textArea = document.getElementById(
        'chat-input',
      ) as HTMLTextAreaElement

      textArea.value = textArea.value.replace(/(\r\n|\n|\r)/gm, '')
    }
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formObject = Object.fromEntries(formData.entries())

    const parsedResults = chatSchema.safeParse(formObject)

    if (!parsedResults.success) {
      const t = parsedResults.error.format()
      setFormErrors(parsedResults.error.format())
      return
    }

    sendMessage(parsedResults.data.text.trim())
    event.currentTarget.reset()

    setFormErrors({} as ZodFormattedError<typeof chatSchemaShape>)
  }

  return (
    <form
      onSubmit={submitForm}
      className="relative flex w-full flex-row flex-nowrap gap-2 shadow-md"
    >
      <button
        className="btn tooltip tooltip-accent gap-2 rounded-none border-none text-primary-content"
        data-tip="Start new chat"
        type="button"
        onClick={startNewChat}
      >
        <Icon className="cursor-pointer" icon="plus" size={24} />
      </button>
      <textarea
        id="chat-input"
        className={clsx(
          'textarea h-8 w-full resize-none rounded-none bg-base-100',
          {
            'border-error': formErrors.text?._errors,
          },
        )}
        name="text"
        placeholder="What's on your mind?"
        onKeyDown={handleKeyDownEvent}
      />
      <button
        ref={submitButtonRef}
        className={clsx('btn gap-2 rounded-none border-none text-accent', {
          'tooltip tooltip-error': formErrors.text?._errors,
        })}
        data-tip={formErrors.text?._errors[0]}
        type="submit"
      >
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
