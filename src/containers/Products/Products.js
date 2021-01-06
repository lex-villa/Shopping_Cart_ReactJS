import React, { useEffect, useState } from 'react';
import useReferredState from '../../hooks/useReferredState';
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




    const [response, setResponse] = useReferredState({})
    const [products, setProducts] = useReferredState([]);
    const [pageNumber, setPageNumber] = useReferredState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/products?page=${pageNumber.current}`)
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                setResponse(responseJSON)
                setProducts([...products.current, ...responseJSON.products]);
            })
    }, [pageNumber.current]);

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.srcElement.documentElement;
        // console.log('entro al handleScroll')
        // console.log(event)
        // console.log("[scrollTop]", scrollTop);
        // console.log("[clientHeight]", clientHeight);
        // console.log("[scrollHeight]", scrollHeight);
        // console.log("[scrollHeight - scrollTop]", scrollHeight - scrollTop)
        // console.log("[clientHeight]", clientHeight);
        // console.log("Llego al fondo??", Math.ceil(scrollHeight - scrollTop) === clientHeight)

        // console.log("response dentro del handleScroll", response.current)
        // console.log("products dentro del handleScroll", products.current)
        // console.log("page num dentro del handleScroll", pageNumber.current)

        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
            // console.log("response.currentPage ", response.current.currentPage)
            // console.log("response.pages", response.current.pages)
            // console.log("response.currentPage === response.pages", response.current.currentPage === response.current.pages)
            if (!(response.current.currentPage === response.current.pages)) {
                // console.log("entrando a subir la pagina")
                setPageNumber(pageNumber.current + 1);
            }
            else {
                setProducts([...products.current])
                // console.log('[page]', pageNumber.current)
            };
        };
        
    };

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    
    return (
        <div className='GridContainer'>
            <h2 className='ProductsSectionTitle'>Our products:</h2>
            <div className='ProductsGridContainer' onScroll={handleScroll}>
                {products.current.map((product) => {
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