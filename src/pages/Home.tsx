import React, { useEffect, useState } from 'react'
import Convert from '../components/Convert/Convert';
import Header from '../components/Header/Header';
import { Currency } from '../models/currency';

const Home: React.FC = () => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [usd, setUsd] = useState<number>(0)
    const [eur, setEur] = useState<number>(0)
    const [azn, setAzn] = useState<number>(0)


    useEffect(()=> {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
          .then( async (response)  => {
            var res = await response.json()
            setCurrencies(res);
          })
          .catch((err) => {
            console.log(err);
          }) 
      }, [])
    
    useEffect(()=> {
      currencies.map((currency) => { 
        if(currency.cc == "USD") {
          setUsd(currency.rate)
        }
        if(currency.cc == "EUR") {
          setEur(currency.rate)
        }
        if(currency.cc == "AZN") {
          setAzn(currency.rate)
        }
      })
    })



  return (
    
    <>
        <Header usd={usd} eur={eur}/>
        <Convert usd={usd} eur={eur} azn={azn} />
    </>
  )
}

export default Home
