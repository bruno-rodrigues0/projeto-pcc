interface ProductCardProps {
    title: string;
    description: string;
    price: string;
    image: string;
    altImage: string;
    link: string;
    category?: string;
}

function ProductCard(props: ProductCardProps){
    const { title, description, price, image, altImage, link, category } = props

    return(
        <div className="card card--product bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="card__image-container relative">
                <img 
                    className="card__image w-full h-48 object-cover" 
                    src={image} 
                    alt={altImage} 
                />
                {category && (
                    <div className="absolute top-2 left-2 bg-highlight-light text-white px-2 py-1 rounded text-xs poppins-medium">
                        {category}
                    </div>
                )}
            </div>
            <div className="card__content p-4">
                <header className="card__header mb-3">
                    <h3 className="card__title text-lg poppins-semibold text-dark">{title}</h3>
                </header>
                <div className="card__body mb-4">
                    <p className="card__description text-sm text-gray-600 line-clamp-3">{description}</p>
                </div>
                <div className="card__footer flex-row justify-between items-center">
                    <span className="card__price text-xl poppins-bold text-highlight-light">
                        R$ {price}
                    </span>
                    <a 
                        href={link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button--cta text-sm px-4 py-2 max-w-none w-auto"
                    >
                        {link.includes('mercadolivre') ? 'Comprar no ML' : 'Ver Mais'}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;