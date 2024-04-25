import React, { FC, useEffect, useState } from 'react'
import styles from './FlightOption.module.scss'
import Button from '../../UI/Button/Button'
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface FlightOptionProps {
  carrier: string;
  price: number;
  departureTime: string;
  stops: number;
  arrivalTime: string;
  departureDate: string;
  arrivalDate: string;
  origin: string;
  originName: string;
  destinationName: string;
  destination: string;
}

const FlightOption: FC<FlightOptionProps> = (props) => {

  // курсы валют (по идеи нужно подключать APIшку валют для этого)
  let USD = 93
  let EUR = 99

  const currency = useTypedSelector(state => state.currencyReducer.currency)

  const [price, setPrice] = useState(props.price)
  const [currencySymbol, setCurrencySymbol] = useState("₽")

  useEffect(() => {
    if (currency === "RUB") {
      setPrice(props.price)
      setCurrencySymbol("₽")
    } else if (currency === "USD") {
      setPrice(parseFloat((props.price / USD).toFixed(2)))
      setCurrencySymbol("$")
    } else if (currency === "EUR") {
      setPrice(parseFloat((props.price / EUR).toFixed(2)))
      setCurrencySymbol("€")
    }
  }, [currency])

  let stops
  if (props.stops === 0) {
    stops = "без пересадок"
  } else if (props.stops === 1) {
    stops = "1 пересадка"
  } else if (props.stops === 2) {
    stops = "2 пересадки"
  } else if (props.stops === 3) {
    stops = "3 пересадки"
  }

  let logoCompany
  if (props.carrier === "TK") {
    logoCompany = "./image/logos_company/turkish_airlines.png"
  } else if (props.carrier === "S7") {
    logoCompany = "./image/logos_company/S7_airlines.png"
  } else if (props.carrier === "SU") {
    logoCompany = "./image/logos_company/Aeroflot_Russian_Airlines.png"
  } else if (props.carrier === "BA") {
    logoCompany = "./image/logos_company/british_airways_logo.png"
  }

  return (
    <div className={styles.flightOption}>
      <div className={styles.leftBlock}>
        <div className={styles.logoCompany}>
          <img src={logoCompany} alt="logoCompany" />
        </div>
        <Button>
          <p>Купить</p>
          <p>за {price} {currencySymbol}</p>
        </Button>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.info1}>
          <div className={styles.time}>{props.departureTime}</div>
          <div className={styles.countStops}>{stops}</div>
          <div className={styles.time}>{props.arrivalTime}</div>
        </div>
        <div className={styles.info2}>
          <div className={styles.sity}>{props.origin}, {props.originName}</div>
          <div className={styles.sity}>{props.destinationName}, {props.destination}</div>
        </div>
        <div className={styles.info3}>
          <div className={styles.date}>{props.departureDate}</div>
          <div className={styles.date}>{props.arrivalDate}</div>
        </div>
      </div>
    </div>
  )
}

export default FlightOption