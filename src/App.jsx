import React, {useState} from 'react';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Card,
    CardGrid,
    CellButton,
    Header,
    Text,
    Headline,
    Spacing
} from '@vkontakte/vkui';
import {Icon28AddOutline, Icon12ClockOutline} from '@vkontakte/icons';
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
              <CardGrid size={'l'} spaced>
                {
                  bookings.map((booking, index) =>
                      <Card key={index} expandable style={{padding: '10px 20px'}}>
                        <Headline weight={'1'}>Бронь №{index + 1}</Headline>
                        <Spacing />
                        <Icon12ClockOutline color={'#2688eb'} style={{display: 'inline'}}/> {booking.date} {booking.time}
                        <span>&nbsp;•&nbsp;Башня&nbsp;</span><span className={styles.accent}>{booking.tower}</span>
                        <span>&nbsp;•&nbsp;Этаж&nbsp;</span><span className={styles.accent}>{booking.floor}</span>
                        <span>&nbsp;•&nbsp;Комната&nbsp;</span><span className={styles.accent}>{booking.room}</span>
                        <Spacing />
                        <Text>
                          {booking.comment}
                        </Text>
                      </Card>
                  )
                }
              </CardGrid>
              <CellButton before={<Icon28AddOutline/>}>Добавить бронь</CellButton>
            </Group>
          </Panel>
        </View>
  );
}

function App() {
  return (
    <ConfigProvider appearance={'light'}>
      <AdaptivityProvider>
        <AppRoot>
          <Main />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
