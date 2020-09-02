import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const totalprice=cart.reduce((total,prd)=>total+prd.price,0)
    let shhippingCost=0;
    if(totalprice>35){
        shhippingCost=0;

    }
    else if(totalprice>15){
        shhippingCost=4.99;
    }
    else if(totalprice>0){
        shhippingCost=12.99;
    }


    return (
        <div>
            <h4>Order Summary</h4>
    <p>Items Ordered:{cart.length}</p>
    <p>Product Price:{totalprice}</p>
    <p>Shipping Cost:{shhippingCost}</p>
    <p>Total Price:{totalprice+shhippingCost}</p>
            
        </div>
    );
};

export default Cart;