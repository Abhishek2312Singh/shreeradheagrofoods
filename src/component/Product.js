import { Link } from 'react-router-dom'
import product1 from '../assets/img/menu/product1.png';
import product2 from '../assets/img/menu/milled-product.png'
import './Product.css'

export default function Product() {
    return (
        <div className='container'  style={{width: '800px', height: '450px'}}>
            <h1 style={{ textAlign: 'center'  }}>Find Out the Most Popular Product</h1>
            <div class="card-group">
                <div class="card my-card mx-5 my-4" style={{ border:'none'}}>
                    <a href='assests/img/menu/potato-flakes'><img src={product1} class="card-img-top" style={{width:'200px', display: 'block', margin: '0 auto'}}  alt="..." /></a>

                    <div class="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                        <h3 class="card-title">Potato Flakes</h3>
                        <p class="card-text"></p>
                        <Link to="potatoFlakes" class="btn btn-primary">Read More</Link>
                    </div>
                </div>
                <div class="card my-card my-4"  style={{ border:'none'}}>
                     <a href='assests/img/menu/milled-potato'><img src={product2} class="card-img-top" style={{width:'200px', display: 'block', margin: '0 auto'}} alt="..." /></a>
                    <div class="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                        <h3 class="card-title">Milled Products</h3>
                        <p class="card-text"></p>
                       <Link to="milledProducts" class="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
