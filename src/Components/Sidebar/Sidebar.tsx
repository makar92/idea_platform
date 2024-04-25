import React, { FC } from 'react'
import styles from './Sidebar.module.scss'
import Select from '../UI/Select/Select'
import CheckBox from '../UI/CheckBox/CheckBox';
import { SET_CURRENCY } from '../../store/reducers/currencyReducer';
import { useTypeDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CHANGE_STOPS, SET_ALL_STOPS } from '../../store/reducers/stopsReducer';

interface CheckedValues {
  all: boolean;
  oneStop: boolean;
  twoStops: boolean;
  threeStops: boolean;
}

interface SideBarProps {
  className?: string;
}

const Sidebar: FC<SideBarProps> = (props) => {

  const dispatch = useTypeDispatch()
  const currency = useTypedSelector(state => state.currencyReducer.currency)
  const stops = useTypedSelector(state => state.stopsReducer.stops)

  //Выбор валюты
  const options = ['RUB', 'USD', 'EUR'];
  const handleOptionChange = (value: string) => {
    dispatch({type: SET_CURRENCY, payload: {curency: value}})
  }

  // установить один из чекбоксов
  const setCheckBox = (checkboxName: keyof CheckedValues) => {
    dispatch({type: CHANGE_STOPS, payload: {
       ...stops,
        [checkboxName]: !stops[checkboxName],
    }})
  };

  //Установить все чекбоксы
  const setAll = () => {
    if (stops.all === true) {
      dispatch({type: SET_ALL_STOPS, payload: {all: false}})
    } else {
      dispatch({type: SET_ALL_STOPS, payload: {all: true}})
    }
      
  }

  return (
    <div className={styles.sidebar + " " + props.className}>
      <h2>Валюта</h2>
      <div className={styles.select}>
        <Select
          options={options}
          selectedOption={currency}
          onChange={handleOptionChange}
        />
      </div>
      <h2>Количество пересадок</h2>
      <div className={styles.checkboxGroup}>
        <CheckBox
          label="Все"
          checked={stops.all}
          onChange={setAll}
        />
        <CheckBox
          label="1 пересадка"
          checked={stops.oneStop}
          onChange={() => setCheckBox('oneStop')}
        />
        <CheckBox
          label="2 пересадки"
          checked={stops.twoStops}
          onChange={() => setCheckBox('twoStops')}
        />
        <CheckBox
          label="3 пересадки"
          checked={stops.threeStops}
          onChange={() => setCheckBox('threeStops')}
        />
      </div>
    </div>
  )
}

export default Sidebar