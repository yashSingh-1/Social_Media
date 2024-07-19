import React from 'react'

const AuthError = ({message}: {message: string | undefined}) => {
  return (
    <div className='p-2 text-slate-300 text-sm flex justify-center  mt-2 rounded-lg'>
        {message}
    </div>
  )
}

export default AuthError