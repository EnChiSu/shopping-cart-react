import './Menu.css';
import { useState, useRef } from 'react';

const Menu = ({ open, setOpen, infos, itemCount, setItemCount }) => {
    const [chosenSize, setChosenSize] = useState('');
    const [chosenColor, setChosenColor] = useState('');

    const handleSizeSelect = (e) => {
        setChosenSize(e.target.value);
    }

    const handleColorSelect = (e) => {
        setChosenColor(e.target.value);
    }

    let sizeOpt = infos.infos.size.map((size) => {
        return  <span className="size__option" key={ size } >
                    <input 
                        type="button" 
                        name="button-group" 
                        className="size__option__button" 
                        value={ size } 
                        key={ size } 
                        onClick={ handleSizeSelect }
                        style={{ background: chosenSize === size ? "#B22222" : "#383838" }}
                    />
                </span>
    })

    let colorOpt = infos.infos.color.map((color) => {
        return  <span className="color__option" key={ color } >
                    <input 
                        type="button" 
                        name="button-group" 
                        className="color__option__button" 
                        value={ color } 
                        key={ color } 
                        onClick={ handleColorSelect }
                        style={{ background: chosenColor === color ? "#B22222" : "#383838" }}
                    />
                </span>
    })

    const minusCount = () => {
        if(itemCount>1) {
            setItemCount(itemCount - 1);
        }
    }

    const plusCount = () => {
        setItemCount(itemCount + 1);
    }
    
    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <nav
            className='addToCart__container'
            open={open}
            style={{ transform: open ? (window.screen.availWidth>1800? 'translateY(38vh)':'translateY(20vh)') : 'translateY(300vh)' }}
        >
            <div className="menu__container">
                <div className="menu__bar">
                    <img className="menu__bar__image" alt={infos.infos.title} src={ infos.infos.img_url }/>
                    <div className="menu__content">
                        <div className="menu__title">
                            <span className="menu__title__text">{ infos.infos.title }</span>
                        </div>
                        <div className="menu__price">
                            <span className="menu__salePrice__text">${ infos.infos.saleHighPrice }</span>
                        </div>
                    </div>
                    <button className='close__menu__btn' onClick={ handleClose }>
                        <span className='close__menu__icon'>
                            X
                        </span>
                    </button>
                </div>
                <hr className='menu__horizontal__line'></hr>
                <div className="menu__options">
                    <p className='menu__options__title'>
                        <span className="menu__options__title__text">尺寸</span>
                        <span className="menu__options__subTitle__text">補充說明</span>
                    </p>
                    <div className='size__container'>
                        { sizeOpt }
                    </div>
                </div>
                <div className="menu__options">
                    <p className='menu__options__title'>
                        <span className="menu__options__title__text">顏色</span>
                        <span className="menu__options__subTitle__text">補充說明</span>
                    </p>
                    <div className='color__container'>
                        { colorOpt }
                    </div>
                </div>
                <hr className='menu__horizontal__line'></hr>
                <div className="menu__calc__bar">
                    <span className='calc__title'>購買數量</span>
                    <div className='calc__bar'>
                        <button className='minus__calc__btn' onClick={ minusCount }>-</button>
                        <span> { itemCount } </span>
                        <button className='plus__calc__btn' onClick={ plusCount }>+</button>
                    </div>
                </div>
                <div className="menu__calc__bar">
                    <button
                        className='confirm__add__cart__btn'
                        onClick={ handleClose }
                    >
                        加入購物車
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Menu;