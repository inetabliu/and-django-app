import React from 'react'
import ShoesShow from './components/ShoesShow.js'
// eslint-disable-next-line no-unused-vars
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navigation from './Navigation.js'
import ShoesIndex from './components/ShoesIndex.js'
import Footer from './Footer.js'

const App = () => {
  return (

    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/shoes/:id" component={ShoesIndex} />
        <Route path="/" component={ShoesShow} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
