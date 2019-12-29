import React, { ReactNode } from 'react'
import './layout.css'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => <>{children}</>

export default Layout
