import React, { useState } from 'react';
import Product from './Product.json';
import { useNavigate } from 'react-router';

const FilterProduct = () => {
    const [items, setItems] = useState(Product);
    const [search, setSearch] = useState('');

    const filterItems = (catItem) => {
        const updatedItems = Product.filter((curItem) => curItem.category === catItem);
        setItems(updatedItems);
    };

    let navigate = useNavigate();

    function handleSubmit() {
        navigate('/');
    }

    return (
        <>
            <section className='mt-5 mb-5'>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="card-body btns mt-5 mb-5">
                            <button type="button" className="btn me-2" onClick={() => setItems(Product)}>All Product</button>
                            <button type="button" className="btn me-2" onClick={() => filterItems("men's clothing")}>Men Cloth</button>
                            <button type="button" className="btn me-2" onClick={() => filterItems("jewelery")}>Jewelery</button>
                            <button type="button" className="btn me-2" onClick={() => filterItems("electronics")}>Electronics</button>
                            <button type="button" className="btn me-2" onClick={() => filterItems("women's clothing")}>Women Cloth</button>
                        </div>
                        <div className="search-box">
                            <form action="">
                                <input type="text" onChange={(e) => setSearch(e.target.value)} style={{ padding: '10px 40px 10px 10px' }} placeholder='Search here...' />
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        {items
                            .filter((item) => search.toLowerCase() === '' || item.title.toLowerCase().includes(search))
                            .map((val) => (
                                <div className="col-3 mb-4" key={val.id}>
                                    <div className="card">
                                        <img src={val.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{val.title}</h5>
                                            <p className="card-text">{val.description}</p>
                                            <a href="#" className="btn" onClick={handleSubmit}>Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilterProduct;