import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import Product from '../../components/Product/Product';

import './Products.css';


const Products = (props) => {
    // const { onFetchProducts, products, pageNumber } = props;

    // useEffect(() => {
    //     onFetchProducts(pageNumber);

    // }, [onFetchProducts, pageNumber]);

    // useEffect(() => {
    //     console.log("State del reducer desde el componente")
    //     console.log(state)
    //     console.log("Products del reducer desde el componente")
    //     console.log(products)
    // }, [products])




    const [response, setresponse] = useState({})
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/products?page=${pageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                setresponse(responseJSON)
                setProducts((prev) => [...prev, ...responseJSON.products]);
            })
    }, [pageNumber]);


    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        // console.log('entro al handle')
        // console.log("[scrollTop]", scrollTop);
        //console.log("[clientHeight]", clientHeight);
        // console.log("[scrollHeight]", scrollHeight);
        // console.log(scrollHeight - scrollTop)
        // console.log("[clientHeight]", clientHeight);
        // console.log(Math.ceil(scrollHeight - scrollTop) === clientHeight)
        //const prodToRender = products.slice(0,6)
        //setProductsToRender()
        
        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
            if (!(response.currentPage === response.pages)) {
                setPageNumber(prev => prev + 1);
            }
            else {
                setProducts((prev) => [...prev, ...products.products])
                console.log('[page]', pageNumber)
            };
        };
    };
        console.log('[response]', response.pages)
        console.log('[products]', products)

        return (
            <div>
                <h2 className='ProductsSectionTitle'>Our products:</h2>
                <div className='ProductsGridContainer' onScroll={handleScroll}>
                    {products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                imgURL={product.img}
                                commentsCounter={product.comments}
                                isBasics={product.basics}
                                rate={product.rate}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };


// const mapStateToProps = (state) => {
//     return {
//         products: state.products.products,
//         pageNumber: state.products.pageNumber,
//   
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onFetchProducts: (pageNumber) => dispatch(actions.fetchProducts(pageNumber)),
//     }
// };

export default Products;
// connect(mapStateToProps, mapDispatchToProps)