import React, { ReactNode } from 'react'
import Layout from './components/layout'

type PageElementWrapperProps = {
  element: ReactNode
  props: object
}

export default ({ element, props }: PageElementWrapperProps) => (
  <Layout {...props}>{element}</Layout>
)
