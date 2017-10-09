class Sqr {
  constructor(row, col, color) {
    this.row = row
    this.col = col
    this.color = color
  }
}

export class O {
  constructor(row, col, color) {
    this.row = row
    this.col = col
    this.color = color
  }
  squares() {
    return [
      new Sqr(this.row, this.col, this.color),
      new Sqr(this.row, this.col+1, this.color),
      new Sqr(this.row+1, this.col, this.color),
      new Sqr(this.row+1, this.col+1, this.color),
    ]
  }
}

export class L {
  constructor(row, col, color) {
    this.row = row
    this.col = col
    this.color = color
  }
  squares() {
    return [
      new Sqr(this.row, this.col, this.color),
      new Sqr(this.row+1, this.col, this.color),
      new Sqr(this.row+2, this.col, this.color),
      new Sqr(this.row+2, this.col+1, this.color),
    ]
  }
}

export class I {
  constructor(row, col, color) {
    this.row = row;
    this.col = col;
    this.color = color;
  }
  squares() {
    return [
      new Sqr(this.row, this.col, this.color),
      new Sqr(this.row+1, this.col, this.color),
      new Sqr(this.row+2, this.col, this.color),
      new Sqr(this.row+3, this.col, this.color),
    ]
  }
}

export class Z {
  constructor(row, col, color) {
    this.row = row;
    this.col = col;
    this.color = color;
  }
  squares() {
    return [
      new Sqr(this.row, this.col, this.color),
      new Sqr(this.row+1, this.col, this.color),
      new Sqr(this.row+1, this.col+1, this.color),
      new Sqr(this.row+2, this.col+2, this.color),
    ]
  }
}

export class T {
  constructor(row, col, color) {
    this.row = row;
    this.col = col;
    this.color = color;
  }
  squares() {
    return [
      new Sqr(this.row, this.col, this.color),
      new Sqr(this.row, this.col+1, this.color),
      new Sqr(this.row, this.col+2, this.color),
      new Sqr(this.row+1, this.col+1, this.color),
    ]
  }
}