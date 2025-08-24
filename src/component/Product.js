import { Link } from 'react-router-dom'
import product1 from '../assets/img/menu/product1.png';
import product2 from '../assets/img/menu/milled-product.png'
import './Product.css'

export default function Product() {
    return (
        <div className="products-section">
            <div className="modern-product-grid">
                <div className="modern-product-card">
                    <img src={product1} className="card-img-top" alt="Potato Flakes" />
                    <div className="modern-product-content">
                        <h3 className="modern-product-title">Potato Flakes</h3>
                        <p className="modern-product-description">
                            Premium quality potato flakes perfect for instant mashed potatoes, 
                            soups, and various culinary applications.
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                            <span className="badge bg-success">Premium Quality</span>
                            <Link to="potatoFlakes" className="btn btn-primary modern-btn-primary">
                                Learn More <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="modern-product-card">
                    <img src={product2} className="card-img-top" alt="Milled Products" />
                    <div className="modern-product-content">
                        <h3 className="modern-product-title">Milled</h3>
                        <p className="modern-product-description">
                            Finely milled potato products ideal for baking, 
                            thickening agents, and industrial applications.
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                            <span className="badge bg-info">Versatile</span>
                            <Link to="milledProducts" className="btn btn-primary modern-btn-primary">
                                Learn More <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
