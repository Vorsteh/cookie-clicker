import React from 'react'
import CookieImage from '../images/cookie.png'

const BuyComponent = (props) => {

  const buy = () => {
    props.addFunction(props.type)
  }


  return (
    <div className='flex p-1 bg-fuchsia-900 border-slate-700 border-4 cursor-pointer' onClick={buy}>
        <img src={props.icon} alt="" className='w-9 h-9 mr-4 my-auto' />
        <div>
            <p className='text-white font-bold text-2xl'>{props.type}</p>
            <div className=' inline-flex items-center'>
                <img src={CookieImage} alt="" className=' w-3 h-3' />
                <p className='text-green-500'>{props.price}</p>
            </div>
        </div>
        <p className=' ml-auto text-black my-auto font-semibold text-3xl opacity-60'>{props.amount}</p>
    </div>
  )
}

export default BuyComponent