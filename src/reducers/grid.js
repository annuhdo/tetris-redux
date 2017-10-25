const resetGrid = () => {
  const res = []
  for (let i = 0; i < 20; i++) {
    const row = []
    for (let j = 0; j < 10; j++) {
      row.push( null )
    }
    res.push(row)
  }
  return res
}

function grid(state = [], action) {
  switch (action.type) {
    case 'START':
      return resetGrid()
    default:
      return state
  }
}

export default grid