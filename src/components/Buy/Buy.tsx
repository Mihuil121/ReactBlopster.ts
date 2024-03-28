import React, { Component } from 'react'
import './Buy.css'
import CardBuy from './CardBuy/CardBuy.tsx';

export default class Buy extends Component {
  render() {
    return (
      <div id="myText">
        <div className="Buy-main">
          <p className='magazi'>
            Магазин
          </p>
          <CardBuy />
        </div>
      </div>
    );
  }
}
