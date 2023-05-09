import React from 'react';
import {
  Card,
  CardGrid,
  CellButton,
  Group,
  Header,
  Headline,
  Panel,
  PanelHeader,
  Spacing,
  Text,
} from '@vkontakte/vkui';
import styles from './BookingList.module.css';
import PropTypes from 'prop-types';
import { Icon12ClockOutline, Icon28AddOutline } from '@vkontakte/icons';

function BookingList({ bookings, setPanel }) {
  console.log(bookings);
  return (
    <Panel>
      <PanelHeader>Booking Service</PanelHeader>
      <Group className={styles.group} header={<Header>Бронирования</Header>}>
        <CardGrid size={'l'} spaced>
          {bookings.map((booking, index) => (
            <Card key={index} style={{ padding: '10px 20px' }}>
              <Headline weight={'1'}>Бронь №{index + 1}</Headline>
              <Spacing />
              <Icon12ClockOutline color={'#2688eb'} style={{ display: 'inline' }} /> {booking.date}{' '}
              <span>&nbsp;•&nbsp;</span>
              {booking.fromTime}
              <span>&nbsp;-&nbsp;</span>
              {booking.toTime}
              <span>&nbsp;•&nbsp;Башня&nbsp;</span>
              <span className={styles.accent}>{booking.tower === 'A' ? 'А' : 'Б'}</span>
              <span>&nbsp;•&nbsp;Этаж&nbsp;</span>
              <span className={styles.accent}>{booking.floor}</span>
              <span>&nbsp;•&nbsp;Комната&nbsp;</span>
              <span className={styles.accent}>{booking.room}</span>
              <Spacing />
              <Text>{booking.comment}</Text>
            </Card>
          ))}
        </CardGrid>
        <CellButton before={<Icon28AddOutline />} onClick={() => setPanel('form')}>
          Добавить бронь
        </CellButton>
      </Group>
    </Panel>
  );
}

BookingList.propTypes = {
  bookings: PropTypes.array,
  setPanel: PropTypes.func,
};

export default BookingList;
