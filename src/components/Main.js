import React from 'react'
import { Route } from 'react-router-dom'

import Goin from './goin/Goin'
import Home from './home/Home'
const Main = () => {
  return (
    <div>
      <Route exact path="/" component={Goin} />
      <Route path="/home" component={Home} />
    </div>
  )
}
export default Main
