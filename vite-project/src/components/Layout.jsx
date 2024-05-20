import React, { Children } from 'react'

const Layout = ({children}) => {
  return (
    <main className='layout'>{children}</main>
  )
}

export default Layout
