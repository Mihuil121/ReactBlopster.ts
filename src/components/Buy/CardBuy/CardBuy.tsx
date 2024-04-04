import React, { Component, ReactNode } from 'react'
import { app } from '../../app/app.ts'
import Input from '../input/Input.tsx'
import { HashLink } from 'react-router-hash-link'
import './CardBuy.css'
import { ArrowLeft, BadgeX } from 'lucide-react';


type Arrat = {
  name: string,
  img: string,
  description: string
  urlWB: string
  urlOzon: string
  buy: string
}

type CardBuyState = {
  searchTerm: string;
  BuyFiltr: ReactNode[]
  seloectadCard: Arrat | null
  ClickOrderBuy: React.JSX.Element | null
}

export default class CardBuy extends Component<{}, CardBuyState> {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      BuyFiltr: [],
      seloectadCard: null,
      ClickOrderBuy: null
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.seloectBuyCard = this.seloectBuyCard.bind(this)
    this.ClickOrder = this.ClickOrder.bind(this)
    this.ClickOrder2 = this.ClickOrder2.bind(this)

  }

  seloectBuyCard(card: Arrat): void {
    this.setState({ seloectadCard: card })
  }

  handleSearch(searchTerm: string): void {
    this.setState({ searchTerm })

  }

  ClickOrder(): void {
    this.setState({
      ClickOrderBuy: <div className='order-from-the-platform '>
        <div className="order-from-the-platform-buy">
          <div className="Buyorder">
            <div className="BuyorderTextFlex">
              <p className='BuyorderText'>Заказать с платформы: </p>
              <BadgeX onClick={this.ClickOrder2} className='BadgeX' />
            </div>
            <div className="textZ">
              <button className='texrZBuy1' onClick={(e) => { e.preventDefault(); window.location.href = `${this.state.seloectadCard?.urlWB}` }}>
                <p> WB </p>
              </button>
              <button className='texrZBuy2' onClick={(e) => { e.preventDefault(); window.location.href = `${this.state.seloectadCard?.urlOzon}` }}>
                <p> OZON </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    })
  }

  ClickOrder2(): void {
    this.setState({
      ClickOrderBuy: null
    })
  }

  render() {
    const filteredApp: Arrat[] = app.filter(item =>
      item.name.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    );

    let BuyFiltr: ReactNode[];
    let InputBuy: React.JSX.Element;

    if (this.state.seloectadCard) {
      BuyFiltr = [
        <div>
          <div className="DescriptionBuyBacgraund">
            <div className="BuyDescription">
              <img src={this.state.seloectadCard?.img} alt={this.state.seloectadCard?.name} className='img-Description-Buy' />
              <div className="textDecorationBuy">
                <h1 className='nameBuy'> {this.state.seloectadCard?.name}</h1>
                <p> {this.state.seloectadCard?.buy}</p>
                <div className="borderBuy">
                  <p className='descriptionBuy'> ``{this.state.seloectadCard?.description}``</p>
                </div>
                <button className="order" onClick={this.ClickOrder}>
                  <p className="orderBuy">заказать</p>
                </button>
              </div>
            </div>
          </div>
          {this.state.ClickOrderBuy}
        </div>
      ];

      InputBuy =
        <div className='rebootBuy'>
          <div className='reboot' onClick={RebootBuy}>
            <ArrowLeft />
          </div>
        </div>

      function RebootBuy():void {
        window.location.reload()
      }

    } else {
      InputBuy = <Input onSearch={this.handleSearch} />
      BuyFiltr = filteredApp.map((d: Arrat):React.JSX.Element => (

        <div className="border-buy" onClick={() => this.seloectBuyCard(d)} >
          <div className="buy-img">

            <img src={d.img} alt="" className="buy-img" />
          </div>
          <div className="buy-text">
            <p>
              {d.name}
            </p>
          </div>
          <div className="buy">
            <p>
              {d.buy}
            </p>
          </div>
          <div >
            <button className="buy-buton">
              <p className=' text-button '>
                купить
              </p>
            </button>
          </div>
        </div>

      ))
    }

    return (
      <div className="">
        {InputBuy}
        <div className="blok">
          {BuyFiltr}
        </div>
      </div>
    )
  }
}
