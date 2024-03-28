import React, { Component } from 'react'
import './Nuws.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slider } from '../app/Slider.ts';
import Block from './NuwBloc/Block.tsx';

export default class Nuws extends Component {
  render() {
    return (
      <div id="myText" className='News'>
        <div className="text-News">
          <p>
            Новости <br />БЛОП-ТОП
          </p>
        </div>
        <Slide>
          {slider.map((d, index) => (
            <div key={index}>
              <img src={d.img} alt="" className="Slider-News-Image" onLoad={() => console.log('Image loaded')} onError={() => console.log('Image failed to load')} />
            </div>
          ))}
        </Slide>
        <Block/>
      </div>
    )
  }
}
