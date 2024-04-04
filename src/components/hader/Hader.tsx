import React from 'react';
import './Hader.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlopTop from '../../img/maxresdefault.jpg';
import { HashLink } from 'react-router-hash-link';
import { Home,ShoppingBasket,Newspaper,SatelliteDish,User} from 'lucide-react';

interface MyComponentProps {
    ButtonMain: () => void;
}

export default class Hader extends React.Component<MyComponentProps> {
    render() {
        return (
            <div>
                <div className="bloptop-heder">
                    <div className="img-blop-icon">
                        <img src={BlopTop} alt="blop-top" className='icon-img' />
                    </div>
                    <div className="div-text-hader">
                    <div className="text-heder">
                            <HashLink to='/'>
                                <button className='border-text' >
                                    Главная<Home />
                                    
                                </button>
                            </HashLink>
                        </div>
                        <div className="text-heder">
                            <HashLink to='/Buy#myText'>
                                <button className='border-text'>
                                    Магазин <ShoppingBasket />
                                </button>
                            </HashLink>
                        </div>
                        <div className="text-heder">
                            <HashLink to='/Nuw#myText'>
                                <button className='border-text' >
                                    Новости
                                    <Newspaper />
                                </button>
                            </HashLink>
                        </div>
                        
                        
                        <div className="text-heder">
                            <button onClick={()=>{window.location.assign('https://t.me/s/bloptop ')}} className='border-text'>
                                Телеграм
                                <SatelliteDish />
                            </button>
                        </div>
                       
                        <div className="text-heder">
                            <HashLink to='/Sin#myText'>
                            <button className='border-text'>
                                Войти
                                <User />
                            </button>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
