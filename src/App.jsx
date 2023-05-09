import React, {useState} from 'react';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  View
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {bookings as defaultBookings} from "./bookings";
import BookingList from "./BookingList/BookingList";
import Form from "./Form/Form";

function Main() {
  const [bookings, setBookings] = useState(defaultBookings);
  const [panel, setPanel] = useState('form')
  return (
        <View activePanel={panel}>
          <BookingList bookings={bookings} id={'bookings'} setPanel={setPanel}/>
            <Form id={'form'}/>
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
