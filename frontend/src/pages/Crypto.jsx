import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import axios from 'axios'
import GetCrypto from '../components/GetCrypto'

function Crypto() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  const [cryptoList, setCryptoList] = useState([])

  useEffect(() => {
    async function fetchCryptoList() {
      try {
        const result = await axios.get(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d")
        console.log(result.data)
        setCryptoList(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCryptoList()
  }, [])

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <div className='right-side'>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>FinState Crypto</p>
      </section>
      <div className="crypto"><GetCrypto cryptoList={cryptoList}/></div>
    </div>
    </>
  )
}

export default Crypto
