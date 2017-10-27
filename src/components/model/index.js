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
    return [
      [colorMatch, 0, 0, 0],
      [colorMatch, 0, 0, 0],
      [colorMatch, colorMatch, 0, 0]
    ]
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
    return [
      [colorMatch, 0, 0, 0],
      [colorMatch, colorMatch, 0, 0],
      [0, colorMatch, 0, 0]
    ]
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
    background: '#7c519a',
    borderColor: '#c86dff'
  },
  5: {
    background: '#4a8a82',
    borderColor: '#33e4c5'
  }
}