import './ProductInfo.css';

const ProductInfo = (infos) => {

    let notes = infos.infos.note.map((note) => {
        return <li key={note}>{note}</li>
    })

    let tags = infos.infos.tag.map((tag) => {
        return <span className='productInfo__tag__text' key={tag}>{tag}</span>
    })

    return (
        <div className="productInfo__container">
            <div className="productInfo__content">
                <div className="productInfo__title">
                    <span className="productInfo__title__text">{ infos.infos.title }</span>
                </div>
                <div className="productInfo__price">
                    <span className="productInfo__salePrice__text">${ infos.infos.saleLowPrice } - ${ infos.infos.saleHighPrice }</span>
                    <span className="productInfo__formalPrice__text">${ infos.infos.formalLowPrice } - ${ infos.infos.formalHighPrice }</span>
                </div>
                <div className="productInfo__tag">
                    { tags }
                </div>
            </div>
            <hr className='hotrizontal__line'></hr>
            <div className="productInfo__note">
                <ul className="productInfo__note__text">{ notes }</ul>
            </div>
        </div>
    )
}

export default ProductInfo;