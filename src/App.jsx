import React, {useState} from 'react';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Cell,
    CellButton,
    Header
} from '@vkontakte/vkui';
import { Icon28CalendarOutline, Icon28AddOutline } from '@vkontakte/icons';
import '@vkontakte/vkui/dist/vkui.css';
import styles from './App.module.css';
import {bookings as defaultBookings} from "./bookings";

function Main() {
  const [bookings, setBookings] = useState(defaultBookings);
  return (
        <View activePanel={'panel'}>
          <Panel id="panel" >
            <PanelHeader>Booking Service</PanelHeader>
            <Group className={styles.group} header={<Header>Бронирования</Header>}>
              {
                bookings.map((booking, index) =>
                    <Cell key={index} expandable before={<Icon28CalendarOutline />} >
                      {booking.floor} @ {booking.room}
                    </Cell>
                )
              }
              <CellButton before={<Icon28AddOutline/>}>Добавить бронь</CellButton>
            </Group>
          </Panel>
        </View>
  );
}

function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Main />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
