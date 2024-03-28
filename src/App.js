import Main from "./components/main/Main.tsx";
import Hader from "./components/hader/Hader.tsx";
import Buy from "./components/Buy/Buy.tsx";
import React, { Component } from 'react'
import Nuws from "./components/nuws/Nuws.tsx";
import Basket from "./components/Buy/Basket.tsx/Basket.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Hader />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Nuw' element={<Nuws />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Basket" element={<Basket />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

