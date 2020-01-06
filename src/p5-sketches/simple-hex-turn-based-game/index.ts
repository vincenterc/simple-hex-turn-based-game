import P5 from 'p5'

let p5: P5 | null = null

function sketch(p: P5) {
  p5 = p

  p5.setup = function() {
    p5?.createCanvas(p5.windowWidth, p5.windowHeight)
    p5?.background(125)
  }

  p5.draw = function() {}
}

export default sketch

export { p5 }
