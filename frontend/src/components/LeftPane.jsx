import React from 'react'
import { FaSignOutAlt, FaMoneyBillWave } from 'react-icons/fa'
import { MdDashboard, MdAccountBalanceWallet, MdAccountBalance, MdAreaChart, MdMonetizationOn } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function LeftPane() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }
  
    return (
    <div className='left-pane'>
      <div className='logo'>
        <Link to='/'><FaMoneyBillWave /> FinState</Link>
      </div>
      <div className='pages'>
        <ul>
          <>
            <li>
                <Link to='/'>
                    <MdDashboard /> Dashboard
                </Link>
            </li>
            {/* <li>
                <Link to='/wallet'>
                    <MdAccountBalanceWallet /> Wallet
                </Link>
            </li> */}
            <li>
                <Link to='/bank'>
                    <MdAccountBalance /> Bank transactions
                </Link>
            </li>
            <li>
                <Link to='/crypto'>
                    <MdMonetizationOn /> Cryptocurrencies
                </Link>
            </li>
            <li>
                <Link to='/stocks'>
                    <MdAreaChart /> Stocks search
                </Link>
            </li>
            <li>
              <button className='btn-logout' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        </ul>
      </div>
    </div>
  )
}

export default LeftPane