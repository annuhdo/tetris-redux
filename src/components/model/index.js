export function randomShape() {
  const rnd = Math.floor(Math.random() * 5)
  const color = Math.floor(Math.random() * 5) + 1
  console.log(rnd)
  switch (rnd) {
    case 0:
      return L(color)
    case 1:
      return O(color)
    case 2:
      return T(color)
    case 3:
      return Z(color)
    case 4:
      return I(color)
  }
}

export function L(colorMatch) {
  return [
    [colorMatch, 0, 0, 0],
    [colorMatch, 0, 0, 0],
    [colorMatch, colorMatch, 0, 0]]
}

export function O(colorMatch) {
  return [
    [colorMatch, colorMatch, 0, 0],
    [colorMatch, colorMatch, 0, 0]]
}

export function T(colorMatch) {
  return [
    [0, colorMatch, 0, 0],
    [colorMatch, colorMatch, colorMatch, 0]],
    [0, 0, 0, 0]
}

export function Z(colorMatch) {
  return [
    [colorMatch, 0, 0, 0],
    [colorMatch, colorMatch, 0, 0],
    [0, colorMatch, 0, 0]]
}

export function I(colorMatch) {
  return [
    [0, colorMatch, 0, 0],
    [0, colorMatch, 0, 0],
    [0, colorMatch, 0, 0]]
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