import React, { useState } from 'react';
import { AdaptivityProvider, ConfigProvider, AppRoot, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { bookings as defaultBookings } from './bookings';
import BookingList from './BookingList/BookingList';
import Form from './Form/Form';

function Main() {
  const [bookings, setBookings] = useState(defaultBookings);
  const [panel, setPanel] = useState('form');
  return (
    <View activePanel={panel}>
      <BookingList id={'bookings'} bookings={bookings} setPanel={setPanel} />
      <Form id={'form'} bookings={bookings} setPanel={setPanel} setBookings={setBookings} />
    </View>
  );
}

function App() {
  return (
    <ConfigProvider appearance={'light'} transitionMotionEnabled={false}>
      <AdaptivityProvider>
        <AppRoot>
          <Main />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
