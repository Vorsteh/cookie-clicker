import { useState, useEffect } from 'react'
import BuyComponent from './components/BuyComponent'
import CookieImage from './images/cookie.png'
import './App.css'
import Finger from './images/Finger.png'

function App() {
  const [cookies, setCookies] = useState(0)
  const [cps, setCps] = useState(0)
  const [cookieMul, setCookieMul] = useState(1)
  const [clickMul, setClickMul] = useState(1)
  const [event, setEvent] = useState("Jönsson Ligan's Bakery")

  const [cookieAmount, setCookieAmount] = useState('cookies')

  const [cookieGatherers, setCookieGatherers] = useState([
    {type: 'Cursor', amount: 0, cps: 1, icon: Finger, price: 5},
    {type: 'Grandma', amount: 0, cps: 2, icon: Finger, price: 50},
    {type: 'Hiroshima', amount: 0, cps: 5, icon: Finger, price: 1000}
  ])

  const [ticking, setTicking] = useState(true)
   
  useEffect(() => {
  const timer = setTimeout(() => ticking && setCookies(cookies+cps), 1e3)
  return () => clearTimeout(timer)
  }, [cookies, ticking])


  const addCookies = () => {
    let amountToAdd = clickMul * 1

    setCookies(cookies => cookies + amountToAdd)
  }

  const addBuyComponent = (isType) => {
    setCookieGatherers(cookieGatherers.map(item => {
      
      if(cookies >= item.price && isType === item.type){
        setCookies(cookies => cookies - item.price)
        setCps(cps => cps + item.cps)
        return isType === item.type ? {type: isType, amount: item.amount+1, cps: item.cps, icon: item.icon, price: 5+Math.round(item.price*1.1)} : item
      }else{
        return item
      }
    }))
  }


  const cookieGatherersList = cookieGatherers.map(item => {
    return <BuyComponent type={item.type} icon={item.icon} cps={item.cps} amount={item.amount} price={item.price} key={item.type} addFunction={addBuyComponent}/>
  })

  return (
    <div className="h-screen flex text-gray-200">
      <div className="h-full bg-blue-400 w-1/3 text-center">
        <p className='text-xl mt-20 opacity-50 bg-black w-3/4 mx-auto rounded-full'><span className='text-white font-semibold'>{event}</span></p>
        <div className='text-xl bg-opacity-50 -mt-8 bg-black font-bold'>
          <p className='mt-12'>{cookies}</p>
          <p className=''>{cookieAmount}</p>
          <p className='text-sm font-semibold'>per second: {cps}</p>
        </div>

        <img src={CookieImage} alt="" className='m-auto mt-20 cursor-pointer hover:scale-105 active:scale-95 transition-all rounded-full' onClick={addCookies}/>
      </div>
      <div className="h-full bg-red-400 w-1/2">
        
      </div>
      <div className="h-full bg-purple-400 w-1/6">
        {cookieGatherersList}
      </div>
    </div>
  )
}

export default App
