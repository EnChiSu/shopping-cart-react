import './Details.css';

const Details = (details) => {
    const category_title = "商品分類";
    const discription_title = "商品描述";
    const note_title = "商品備註";
    
    return (
        <div className="detail__container">
            <div className="detail__category">
                <p className='detail__title'>{ category_title }</p>
                <span className="detail__category__text">{ details.details.category }</span>
            </div>
            <hr className='horizontal__line'></hr>
            <div className="detail__description">
                <p className='detail__title'>{ discription_title }</p>
                <span className="detail__description__text">{ details.details.description }</span>
            </div>
            <hr className='horizontal__line'></hr>
            <div className="detail__note">
                <p className='detail__title'>{ note_title }</p>
                <span className="detail__note__text">{ details.details.note }</span>
            </div>
        </div>
    )
}

export default Details;