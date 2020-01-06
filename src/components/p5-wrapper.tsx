import React, { useRef, useEffect } from 'react'
import P5 from 'p5'

declare module 'p5' {
  interface p5InstanceExtensions {
    setSketchProps?: (props: object) => void
    customProps?: object
  }
}

type P5WrapperProps = {
  sketch: (p: P5) => void
  exposeSketchCustomProps?: (props: object) => void
  [propsName: string]: any
}

function P5Wrapper(props: P5WrapperProps) {
  let { sketch, exposeSketchCustomProps = () => {}, ...otherProps } = props
  let p5Wrapper = useRef<HTMLDivElement>(null)
  let p5Instance: P5

  useEffect(() => {
    import('p5').then(mod => {
      let p5 = mod.default

      if (p5Wrapper && p5Wrapper.current) {
        p5Instance = new p5(sketch, p5Wrapper.current)
        if (p5Instance && p5Instance.customProps)
          exposeSketchCustomProps(p5Instance.customProps)
      }
    })
  }, [])

  useEffect(() => {
    if (p5Instance && p5Instance.setSketchProps)
      p5Instance.setSketchProps(otherProps)
  })

  return <div ref={p5Wrapper} />
}

export default P5Wrapper
