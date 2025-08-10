import React from 'react'
import product1 from '../assets/img/menu/product1.png';
import product2 from '../assets/img/menu/milled-product.png'

export default function Product() {
    return (
        <div className='container'  style={{width: '800px'}}>
            <h1 style={{ textAlign: 'center'  }}>Find Out the Most Popular Product</h1>
            <div class="card-group">
                <div class="card mx-5 my-4"  style={{ border:'none'}}>
                    <a href='assests/img/menu/potato-flakes'><img src={product1} class="card-img-top" alt="..." /></a>

                    <div class="card-body">
                        <h3 class="card-title">Potato Flakes</h3>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card my-4"  style={{ border:'none'}}>
                     <a href='assests/img/menu/milled-potato'><img src={product2} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h3 class="card-title">Milled Products</h3>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                       <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
