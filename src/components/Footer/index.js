import './Footer.css';
import Menu from '../Menu/index.js';
import { useState, useRef } from 'react';

const Footer = (infos) => {
    const [open, setOpen] = useState(false);
    const [itemCount, setItemCount] = useState(1);
    const node = useRef();

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div
            className='footer__bar' 
            ref={node}
        >
            <a
                className='shopping__cart__icon__btn'
                onClick={() => toggleMenu()}
            >
                <img className='shopping__cart__icon' src='/images/cart.png'/> 
            </a>
            <span className='shopping__cart__icon__badge'>{itemCount}</span>
            <button
                className='add__cart__btn'
                onClick={() => toggleMenu()}
            >
                加入購物車
            </button>
            <button
                className='buy__btn'
            >
                直接購買
            </button>
            <Menu open={open} setOpen={setOpen} infos={infos} itemCount={itemCount} setItemCount={setItemCount}/>
        </div>
    )
}

export default Footer;