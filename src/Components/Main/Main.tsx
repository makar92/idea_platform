import React, { FC } from 'react';
import styles from './Main.module.scss';
import ticketsData from '../../data/tickets.json';
import FlightOption from './FlightOption/FlightOption';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface MainProps {
  className: string;
}

const Main: FC<MainProps> = (props) => {
  const tickets = ticketsData.tickets;
  // Получаем текущие выбранные опции фильтрации
  const stops = useTypedSelector(state => state.stopsReducer.stops); 

  // Применяем фильтр к билетам
  const filteredTickets = tickets.filter(ticket => {
    // Если выбрано "Все", показываем все билеты
    if (stops.all) return true; 

    // Проверяем, соответствует ли количество пересадок одному из выбранных в фильтре
    return (
      (stops.oneStop && ticket.stops === 1) ||
      (stops.twoStops && ticket.stops === 2) ||
      (stops.threeStops && ticket.stops === 3)
    );
  });

  // Сортируем отфильтрованные билеты по возрастанию цены
  filteredTickets.sort((a, b) => a.price - b.price);

  return (
    <div className={styles.main + " " + props.className}>
      {filteredTickets.map((ticket, index) => (
        <FlightOption
          key={index}
          origin={ticket.origin}
          originName={ticket.origin_name}
          destination={ticket.destination}
          destinationName={ticket.destination_name}
          departureDate={ticket.departure_date}
          departureTime={ticket.departure_time}
          arrivalDate={ticket.arrival_date}
          arrivalTime={ticket.arrival_time}
          carrier={ticket.carrier}
          stops={ticket.stops}
          price={ticket.price}
        />
      ))}
    </div>
  );
}

export default Main;
