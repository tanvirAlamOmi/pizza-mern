import React from 'react'
import pizzas from '../pizzasdata'
import Product from '../components/Product.component'

export default function Home() {
  return (
    <div className='row'>
        {pizzas.map( pizza => {
            return <div className='col-md-4'>
                <div>
                    <Product pizza={pizza}/>
                </div>
            </div>
        })}
    </div>
  )
}

