import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto mt-10 pt-10'>
        <div className="content-block mb-5">
        <Image 
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        height={240} 
        width={240}
        priority={true}
        style={{ width: '100%', height: 'auto', }}
        alt='facebook'/>
       </div>
       <div className="content-block">
        <a 
        onClick={signIn} 
        className='px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500
        rounded-md text-white'>
            Login
        </a>
        </div>
    </div>
  )
}

export default Login