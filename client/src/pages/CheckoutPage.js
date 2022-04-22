import React from 'react'
import CheckoutComponent from '../components/checkout/CheckoutComponent'

export default function CheckoutPage({subtotal}) {
  return (
    <div>
        <CheckoutComponent subtotal= {subtotal} />
    </div>
  )
}
