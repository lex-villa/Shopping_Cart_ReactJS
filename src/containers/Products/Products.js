import React, { useEffect, useState } from 'react';
import useReferredState from '../../hooks/useReferredState';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import Product from '../../components/Product/Product';

import './Products.css';


const Products = (props) => {
    const { onFetchProducts, onAddPage, products, pageNumber, response } = props;

    const [responseRef, setResponseRef] = useReferredState(response)
    const [productsRef, setProductsRef] = useReferredState(products);
    const [pageNumberRef, setPageNumberRef] = useReferredState(pageNumber);

    useEffect(() => {
        onFetchProducts(pageNumber);
    }, [onFetchProducts, pageNumber]);

    // console.log("AFUEEEEEEEEEEERA")
    // console.log("response", response);
    // console.log("response.currentPage ", response.currentPage);
    // console.log("response.pages", response.pages);
    // console.log("response.currentPage === response.pages", response.currentPage === response.pages);

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.srcElement.documentElement;

        console.log("response", responseRef.current);
        console.log("response.currentPage ", responseRef.current.currentPage);
        console.log("response.pages", responseRef.current.pages);
        console.log("response.currentPage === response.pages", responseRef.current.currentPage === responseRef.current.pages);

        if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
            if (!(responseRef.current.currentPage === responseRef.current.pages)) {
                onAddPage();
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
                            productAdded={() => props.onProductAdded(product)}
                        />
                    );
                })}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        response: state.products.response,
        products: state.products.products,
        pageNumber: state.products.pageNumber,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: (pageNumber) => dispatch(actions.fetchProducts(pageNumber)),
        onAddPage: () => dispatch(actions.addPage()),
        onProductAdded: (productObj) => dispatch(actions.addProduct(productObj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);




// This below is using useRef for preserve the state


// const [response, setResponse] = useReferredState({})
    // const [products, setProducts] = useReferredState([]);
    // const [pageNumber, setPageNumber] = useReferredState(1);

    // useEffect(() => {
    //     fetch(`http://localhost:8080/products?page=${pageNumber.current}`)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(responseJSON => {
    //             setResponse(responseJSON)
    //             setProducts([...products.current, ...responseJSON.products]);
    //         })
    // }, [pageNumber.current]);

    // const handleScroll = (event) => {
    //     const { scrollTop, clientHeight, scrollHeight } = event.srcElement.documentElement;
    //     // console.log('entro al handleScroll')
    //     // console.log(event)
    //     // console.log("[scrollTop]", scrollTop);
    //     // console.log("[clientHeight]", clientHeight);
    //     // console.log("[scrollHeight]", scrollHeight);
    //     // console.log("[scrollHeight - scrollTop]", scrollHeight - scrollTop)
    //     // console.log("[clientHeight]", clientHeight);
    //     // console.log("Llego al fondo??", Math.ceil(scrollHeight - scrollTop) === clientHeight)

    //     // console.log("response dentro del handleScroll", response.current)
    //     // console.log("products dentro del handleScroll", products.current)
    //     // console.log("page num dentro del handleScroll", pageNumber.current)

    //     if (Math.ceil(scrollHeight - scrollTop) === clientHeight) {
    //         // console.log("response.currentPage ", response.current.currentPage)
    //         // console.log("response.pages", response.current.pages)
    //         // console.log("response.currentPage === response.pages", response.current.currentPage === response.current.pages)
    //         if (!(response.current.currentPage === response.current.pages)) {
    //             // console.log("entrando a subir la pagina")
    //             setPageNumber(pageNumber.current + 1);
    //         }
    //         else {
    //             setProducts([...products.current])
    //             // console.log('[page]', pageNumber.current)
    //         };
    //     };

    // };
