import React from 'react';
import ProductListingItem from '../product-listing/product-list-item';

export default function ProductListing(props){
    return <div className="product-listing">
                {
                    props.products.map(product =>
                        <ProductListingItem product={product} />)
                }
            </div>
}