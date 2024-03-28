import React, { Component } from 'react'
import Main from '../main/Main.tsx'
import Hader from '../hader/Hader.tsx'
import Buy from '../Buy/Buy.tsx'
import { BrowserRouter } from "react-router-dom";

export default class AppProdgec extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Hader />
                    <Main />
                    <Buy />
                </BrowserRouter>
            </div>
        )
    }
}
