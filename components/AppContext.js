import React from 'react'

const AppContext = React.createContext({
  size : "",
  setSize: () => {

  },
  type: "",
  setType: () => {

  }
})


export default AppContext

/*
export default React.createContext({
  basket:"",
  updateBasket: (name) => {}
})
  */