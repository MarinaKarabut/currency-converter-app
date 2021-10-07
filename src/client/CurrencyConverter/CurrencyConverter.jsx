import { useState, useEffect } from 'react';
import { v4 } from 'uuid'

import styles from './CurrencyConverter.module.scss'

const CurrencyConverter = ({currenciesList}) =>{
     
  const [value, setValue] = useState(1);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [result, setResult] = useState(0);
  const [fromCurrencyName, setFromCurrencyName] = useState();
  const [toCurrencyName, setToCurrencyName] = useState();
    

  
  useEffect(() => {
    const value = Object.values(currenciesList)
    const name = Object.keys(currenciesList)
    setFromCurrency(value[0])
    setToCurrency(value[1])
    setFromCurrencyName(name[0])
    setToCurrencyName(name[1])
    let resultEx = (value[1]/ value[0]).toFixed(2)
    setResult(resultEx)
    }, [currenciesList])

    
  const optionEl = Object.keys(currenciesList).map((value) => <option key={v4()} value={currenciesList[value]}>{value}</option>)

  const convert = (e) => {
    e.preventDefault();
    let resultEx = ((toCurrency / fromCurrency) * value).toFixed(2)
    setResult(resultEx)

    // const name = Object.keys(currenciesList).find(key => currenciesList[key] === fromCurrency)
    // console.log(name);
    // setFromCurrencyName(name)
    // setToCurrencyName(toCurrency)
    // onChangeName(fromCurrency)
  };

  // const onChangeName = (idx) => {
  //   console.log(idx);
  //   // const name = Object.keys(currenciesList).find(key => currenciesList[key] === value)
  //   // console.log(name);
  //   // setFromCurrencyName(name)
  //   // setToCurrencyName(name)
  // }

//   const onChangeName = (value) => {
//     const name = Object.entries(currenciesList).find(key => currenciesList[key] === value)
//     console.log(name);

//     // return name
    
//   }
  
//   onChangeName(fromCurrency)


  return (
    <div className={ styles.formWrapper}>
        <h2 className={ styles.formTitle}>Currency Converter</h2>
        <form onSubmit={convert}>
        <p className={styles.formText} > {value} {fromCurrencyName} равно { result }{toCurrencyName}</p>
            <div className={styles.formFromCurrency}>
                <input className={styles.formCurrency} value={value} onChange={(e) => setValue(e.target.value)} />
                <select className={styles.formSelect} value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>{ optionEl }</select>
            </div>
            <div className ={styles.formToCurrency}>
          <p className={styles.formCurrency} >{ result }</p>
          <select className={styles.formSelect} value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>{ optionEl }</select>
          </div>
          <div className={styles.formBtnWrapper}>
            <button className={styles.formBtn}>Convert</button>
          </div>
      </form>
      </div>
  )
};

export default CurrencyConverter;
