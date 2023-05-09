import React, { useState } from 'react';
import {
  Button,
  DateInput,
  FormItem,
  FormLayout,
  FormLayoutGroup,
  Group,
  Header,
  Input,
  Panel,
  PanelHeader,
  SegmentedControl,
  Select,
  Textarea,
} from '@vkontakte/vkui';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

function Form({ setPanel, setBookings, bookings }) {
  const [tower, setTower] = useState('A');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState(() => new Date());
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState({
    floor: 'default',
    room: 'default',
    fromTime: 'default',
    toTime: 'default',
    toTimeMessage: '',
  });

  const generateSelectableNumbers = (amount) => {
    return [...Array(amount).keys()].map((elem) => {
      return { label: `${elem + 1}`, value: `${elem + 1}` };
    });
  };

  const sendForm = () => {
    const newStatus = {
      floor: floor !== '' ? 'default' : 'error',
      room: room !== '' ? 'default' : 'error',
      fromTime: fromTime !== '' ? 'default' : 'error',
      toTime: toTime !== '' && fromTime < toTime ? 'default' : 'error',
      toTimeMessage:
        fromTime !== '' && toTime !== '' && fromTime >= toTime
          ? 'Время окончания не может быть меньше времени начала.'
          : '',
    };

    setStatus(newStatus);
    if (Object.values(newStatus).some((e) => e === 'error')) {
      return;
    }

    console.log(date);
    const booking = {
      tower,
      floor,
      room,
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
      fromTime,
      toTime,
      comment,
    };

    console.log(booking);
    setBookings([...bookings, booking]);
    setPanel('bookings');
  };

  const clearForm = () => {
    setTower('A');
    setFloor('');
    setRoom('');
    setDate(() => new Date());
    setFromTime('');
    setToTime('');
    setComment('');
  };

  return (
    <Panel>
      <PanelHeader>Booking Service</PanelHeader>
      <Group className={styles.group} header={<Header>Бронирование переговорной</Header>}>
        <FormLayout>
          <FormLayoutGroup mode={'horizontal'}>
            <FormItem top={'Башня'}>
              <SegmentedControl
                value={tower}
                onChange={setTower}
                size={'m'}
                options={[
                  { label: 'A', value: 'A' },
                  { label: 'Б', value: 'B' },
                ]}
              />
            </FormItem>
            <FormItem top={'Этаж'} status={status.floor}>
              <Select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                placeholder={'Не выбран'}
                options={generateSelectableNumbers(27)}
              />
            </FormItem>
            <FormItem top={'Комната'} status={status.room}>
              <Select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder={'Не выбран'}
                options={generateSelectableNumbers(10)}
              />
            </FormItem>
          </FormLayoutGroup>
          <FormLayoutGroup mode={'horizontal'}>
            <FormItem top={'дата'}>
              <DateInput value={date} disablePast={true} onChange={setDate} />
            </FormItem>
            <FormItem top={'От'} status={status.fromTime}>
              <Input value={fromTime} type={'time'} onChange={(e) => setFromTime(e.target.value)} />
            </FormItem>
            <span className={styles.intervalSymbol}>-</span>
            <FormItem top={'До'} status={status.toTime} bottom={status.toTimeMessage}>
              <Input value={toTime} type={'time'} onChange={(e) => setToTime(e.target.value)} />
            </FormItem>
          </FormLayoutGroup>
          <FormLayoutGroup mode={'horizontal'}>
            <FormItem top={'Комментарий'}>
              <Textarea
                placeholder={'Введите комментарий...'}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormItem>
          </FormLayoutGroup>
          <div className={styles.buttonWrapper}>
            <Button size={'l'} appearance={'neutral'} onClick={clearForm}>
              Очистить
            </Button>
            <Button type={'submit'} size={'l'} onClick={sendForm}>
              Отправить
            </Button>
          </div>
        </FormLayout>
      </Group>
    </Panel>
  );
}

Form.propTypes = {
  bookings: PropTypes.array,
  setPanel: PropTypes.func,
  setBookings: PropTypes.func,
};

export default Form;
