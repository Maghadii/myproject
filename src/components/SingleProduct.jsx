// import React, { useEffect, useState } from 'react'

// const SingleProduct = () => {

//     const [data, setData] = useState([])

//     const url = "https://fakestoreapi.com/products"
//     useEffect(() => {
//         fetch(url).then(response => response.json()).then(json => {
//             setData(json)
//         }).catch(error => {
//             console.log('e', error);
//         })
//     }, [])


//     return (
//         <>
//             {
//                 data.map(item => {
//                     return (
//                         <main className="container">
//                             <div className="d-flex g-5 mt-5 mb-5">
//                                 <div className="left-column">
//                                     <img data-image="red" className="active" src={item.image} alt="" />
//                                 </div>
//                                 <div className="right-column">
//                                     <div className="product-description">
//                                         <span>{item.category}</span>
//                                         <h1>{item.title}</h1>
//                                         <p>{item.description}</p>
//                                     </div>
//                                     <div className="product-configuration">
//                                         <div className="product-color">
//                                             <span>Color</span>
//                                             <div className="color-choose">
//                                                 <div>
//                                                     <input data-image="red" type="radio" id="red" name="color" value="red" checked />
//                                                     <label htmlFor="red"><span></span></label>
//                                                 </div>
//                                                 <div>
//                                                     <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
//                                                     <label htmlFor="blue"><span></span></label>
//                                                 </div>
//                                                 <div>
//                                                     <input data-image="black" type="radio" id="black" name="color" value="black" />
//                                                     <label htmlFor="black"><span></span></label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="cable-config">
//                                             <span>Cable configuration</span>
//                                             <div className="cable-choose">
//                                                 <button>Straight</button>
//                                                 <button>Coiled</button>
//                                                 <button>Long-coiled</button>
//                                             </div>
//                                             <a href="#">How to configurate your headphones</a>
//                                         </div>
//                                     </div>
//                                     <div className="product-price">
//                                         <span>${item.price}</span>
//                                         <a href="#" className="cart-btn">Add to cart</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>
//                     )
//                 })
//             }
//             <main className="container">
//                 <div className="d-flex g-5 mt-5 mb-5">
//                     <div className="left-column">
//                         <img data-image="red" className="active" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
//                     </div>
//                     <div className="right-column">
//                         <div className="product-description">
//                             <span>Headphones</span>
//                             <h1>Beats EP</h1>
//                             <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
//                         </div>
//                         <div className="product-configuration">
//                             <div className="product-color">
//                                 <span>Color</span>

//                                 <div className="color-choose">
//                                     <div>
//                                         <input data-image="red" type="radio" id="red" name="color" value="red" checked />
//                                         <label htmlFor="red"><span></span></label>
//                                     </div>
//                                     <div>
//                                         <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
//                                         <label htmlFor="blue"><span></span></label>
//                                     </div>
//                                     <div>
//                                         <input data-image="black" type="radio" id="black" name="color" value="black" />
//                                         <label htmlFor="black"><span></span></label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="cable-config">
//                                 <span>Cable configuration</span>
//                                 <div className="cable-choose">
//                                     <button>Straight</button>
//                                     <button>Coiled</button>
//                                     <button>Long-coiled</button>
//                                 </div>
//                                 <a href="#">How to configurate your headphones</a>
//                             </div>
//                         </div>
//                         <div className="product-price">
//                             <span>148$</span>
//                             <a href="#" className="cart-btn">Add to cart</a>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default SingleProduct


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <main className="container">
            <div className="d-flex g-5 mt-5 mb-5">
                <div className="left-column">
                    <img data-image="red" className="active" src={product.image} alt={product.title} />
                </div>
                <div className="right-column">
                    <div className="product-description">
                        <span>{product.category}</span>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleProduct;