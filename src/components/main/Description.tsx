import React, { Component } from 'react'
import { Descript } from '../app/app.ts'
import { TyDesc } from '../app/Type.ts'
import './Main.css'

export default class Description extends Component {
  render() {
    const chunkSize: number = 2;
    const groupedDesc: TyDesc[][] = []

    for (let i = 0; i < Descript.length; i += chunkSize) {
      groupedDesc.push(Descript.slice(i, i + chunkSize));
    }
    return (
      <div className="desc">
        <div className="card">
          {groupedDesc.map((group, index) => (
            <div className="grup" key={index}>
              {group.map((desc, index) => (
                <div className="card-1" key={index} style={{ background: `url(${desc.imge})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="opacity">
                    <p className='text-card'>{desc.text}</p>
                    <p className='text-description'>{desc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

