import React from 'react'
import { Container } from 'reactstrap'
import './Header.scss'

interface HeaderProps {
    usd: number,
    eur: number
}

const Header:React.FC<HeaderProps> = ({usd, eur}) => {
  return (
    <div className='Header'>
      <Container className='header'>
        <div className="logo">Currency Converter</div>
        <div className="currency-container">
          <div className="currency-block">
            <div className="name">
              USD: 
            </div>
            <div className="rate">
              {Math.floor(usd*100)/100} ₴
            </div>
          </div>
          <div className="currency-block">
            <div className="name">
              EUR: 
            </div>
            <div className="rate">
              {Math.floor(eur*100)/100} ₴
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header