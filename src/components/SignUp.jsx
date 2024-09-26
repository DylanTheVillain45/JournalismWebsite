import React from 'react'

function SignUp() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <h2 className='uppercase text-5xl font-extrabold italic mb-4'>Sign up now!!</h2>
      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScR7Npf4iutVjBybAyuSoLIvcq32ayjPGQaJuX10nGh7f96ww/viewform?usp=sf_link">
        <button className='px-8 py-2 bg-green-500 rounded-md'>
          <p className='text-2xl font-bold'>SIGN UP</p>
        </button>
      </a>
    </div>
  )
}

export default SignUp