import React from 'react';
import SHOP_DATA from './082 shop.data';
import CollectionPreview from '../../compnents/collection-preview/collection-preview';

class ShopPage extends React.Component {
    constructor(){
        super()

        this.state = {
                collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                        collections.map(({id, ...otherCollections}) =>(
                            <CollectionPreview key={id} {...otherCollections}/>
                        ))
                }
            </div>
   
        )
    }
}

export default ShopPage;