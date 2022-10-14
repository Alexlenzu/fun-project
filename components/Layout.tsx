import React from 'react'

interface Props {
  children: React.ReactNode
}


export const Layout = ( { children }: Props ) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout 

 