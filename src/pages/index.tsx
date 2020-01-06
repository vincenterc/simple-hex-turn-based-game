import React from 'react'
import P5 from 'p5'
import P5Wrapper from '../components/p5-wrapper'

export default () => {
  const sketch = (p: P5) => {
    p.setup = function() {
      p.createCanvas(200, 200)
      p.background(255, 0, 0)
    }
  }

  return <P5Wrapper sketch={sketch} />
}
