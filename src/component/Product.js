import React from 'react'
import product1 from '../assets/img/menu/potato-flakes.webp';
import product2 from '../assets/img/menu/milled_potato.webp'

export default function Product() {
    return (
        <div className='container'>
            <h3 style={{ textAlign: 'center' }}>Find Out the Most Popular Product</h3>
            <div class="card-group">
                <div class="card">
                    <a href='assests/img/menu/potato-flakes'><img src={product1} class="card-img-top" alt="..." /></a>

                    <div class="card-body">
                        <h5 class="card-title">Potato Flakes</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                <div class="card">
                     <a href='assests/img/menu/milled-potato'><img src={product2} class="card-img-top" alt="..." /></a>
                    <div class="card-body">
                        <h5 class="card-title">Milled Products</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                       <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
