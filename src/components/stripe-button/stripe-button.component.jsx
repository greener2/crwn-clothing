import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const onToken = token => {
    console.log(token);
    alert("Payment successful");
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_G0yxpQmbDZ75VTqTY7i8CTxZ00FQTEZpQs";

    return (
        <StripeCheckout 
            currency="EUR"
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;