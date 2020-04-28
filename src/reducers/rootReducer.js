const initState = {
  cities: [
    {id: 1, name: 'Paris'},
    {id: 2, name: 'Prague'},
    {id: 3, name: 'London'},
    {id: 4, name: 'Barcelona'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;