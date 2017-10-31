export class Shapes {
  constructor() {
    this.shapes = [
      new L(),
      new O(),
      new T(),
      new Z(),
      new I()
    ]
  }
  getRandom() {
    const shapes = this.shapes
    const rnd = Math.floor(Math.random() * shapes.length)
    const color = Math.floor(Math.random() * shapes.length) + 1
    return shapes[rnd].shape(color)
  }
}

export class L {
  shape(colorMatch) {
    const rightL = [
      [colorMatch, 0, 0, 0],
      [colorMatch, 0, 0, 0],
      [colorMatch, colorMatch, 0, 0]
    ]

    const leftL = [
      [0, 0, colorMatch],
      [0, 0, colorMatch],
      [0, colorMatch, colorMatch]
    ]

    const rnd = Math.floor(Math.random() * 2)

    return rnd % 2 === 0 ? rightL : leftL
  }
}

export class O {
  shape(colorMatch) {
    return [
      [colorMatch, colorMatch, 0, 0],
      [colorMatch, colorMatch, 0, 0]
    ]
  }
}

export class T {
  shape(colorMatch) {
    return [
      [0, 0, 0, 0],
      [0, colorMatch, 0, 0],
      [colorMatch, colorMatch, colorMatch, 0]
    ]
  }
}

export class Z {
  shape(colorMatch) {
    const rightZ = [
      [0, 0, 0],
      [colorMatch, colorMatch, 0],
      [0, colorMatch, colorMatch]
    ]

    const leftZ = [
      [0, 0, 0],
      [0, colorMatch, colorMatch],
      [colorMatch, colorMatch, 0]
    ]

    const rnd = Math.floor(Math.random() * 2)
    
    return rnd % 2 === 0 ? rightZ : leftZ
  }
}

export class I {
  shape(colorMatch) {
    return [
      [0, colorMatch, 0, 0],
      [0, colorMatch, 0, 0],
      [0, colorMatch, 0, 0],
      [0, colorMatch, 0, 0]
    ]
  }
}

export const Colors = {
  1: {
    background: '#ba2894',
    borderColor: '#ff4ad6'
  },
  2: {
    background: '#22449d',
    borderColor: '#17bcff'
  },
  3: {
    background: '#d0ad2f',
    borderColor: '#fdf1b3'
  },
  4: {
    background: '#b41c48',
    borderColor: '#F22F5F'
  },
  5: {
    background: '#4a8a82',
    borderColor: '#33e4c5'
  }
}