export class L {
  shape() {
    return [[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0]]
  }
}

export class O {
  shape() {
    return [[1, 1, 0, 0], [1, 1, 0, 0]]
  }
}

export class T {
  shape() {
    return [[0, 0, 0, 0], [0, 1, 0, 0], [1, 1, 1, 0]]
  }
}

export class Z {
  shape() {
    return [[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0]]
  }
}

export class I {
  shape() {
    return [[0, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0]]
  }
}

export class Shapes {
  allShapes() {
    return [
      new L().shape(),
      new O().shape(),
      new T().shape(),
      new Z().shape(),
      new I().shape()
    ]
  }
  getRandom() {
    const arr = this.allShapes()
    const rnd = Math.floor(Math.random() * arr.length)
    return arr[rnd]
  }
}