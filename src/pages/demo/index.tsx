import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
  {
    title: 'Account',
    to: '/account',
  },
  {
    title: 'Discovery',
    to: '/discovery',
  },
  {
    title: 'Reporting',
    to: '/reporting',
  },
  {
    title: 'Download',
    to: '/download',
  },
]

function Demo() {
  {
    /* <div className='grid-rows-7 grid grid-cols-4 gap-4'>
        <div className='col-start-2 col-end-5 row-start-1 row-end-2 w-full rounded-md bg-gray-800 p-4'>
          <p className='text-white'>WATCHLIST</p>
        </div>
        <div className='col-start-2 col-end-5 row-start-2 row-end-5 w-full rounded-md bg-gray-800 p-4'>
          <p className='text-white'>BOT OUTPUT</p>
        </div>
        <div className='p4 col-start-2 col-end-5 row-start-6 row-end-7 ml-auto w-full rounded-md bg-gray-800'>
          <input
            className='h-14 w-full rounded-sm p-2 text-black focus-visible:outline-none'
            type='text'
            placeholder="What's on your mind?"
          />
        </div>
      </div> */
  }

  return (
    <div className='flex gap-4'>
      <div className='sticky top-0 h-96 w-64 flex-none rounded-md bg-gray-800'>
        <div className='flex flex-col gap-2 p-4'>
          {NAV_LINKS.map(({ title, to }, index) => (
            <NavLink
              key={index}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-teal-600'
                  : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='flex h-96 w-full flex-wrap justify-between gap-2'>
        <div className='h-44 w-full rounded-md bg-gray-800 p-4'>
          <p className='text-white'>WATCHLIST</p>
        </div>
        <div className='h-64 w-full bg-gray-800 p-4'>
          <div className='chat chat-start'>
            <div className='chat-bubble'>
              Aute labore pariatur exercitation ex sint enim aute reprehenderit
              pariatur adipisicing nisi proident.
            </div>
          </div>
          <div className='chat chat-end'>
            <div className='chat-bubble'>
              Velit quis sint duis in amet laborum aliqua excepteur et.
            </div>
          </div>
          <div className='chat chat-end'>
            <div className='chat-bubble'>
              Est id veniam esse laborum minim pariatur duis cillum.
            </div>
          </div>
        </div>
        <div className='h-14 w-full bg-gray-800'>
          <input
            className='h-14 w-full rounded-sm p-2 text-black focus-visible:outline-none'
            type='text'
            placeholder="What's on your mind?"
          />
        </div>
      </div>
    </div>
  )
}

export default Demo
