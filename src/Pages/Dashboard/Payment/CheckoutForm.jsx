import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    }
                }
            }
        )
        if (confirmError) {
            console.log(confirmError)
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            //save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: price,
                date: new Date(),
                quantity: cart.length,
                cartId: cart.map(item => item._id),
                itemNames: cart.map(item => item.name),
                itemPhotos: cart.map(item => item.image),
                itemPrices: cart.map(item => item.price),
                classIds: cart.map(item => item.cartId)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-gray-100 border border-gray-300 rounded-lg shadow">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    className="w-full p-3 border border-gray-300 rounded"
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500 text-center">{cardError}</p>}
            {transactionId && <p className="text-green-500 text-center">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
