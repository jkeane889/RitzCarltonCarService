import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import rootReducer from './redux/reducers';
import App from './src';

let store = createStore(rootReducer);

export default function App() {
   return (
      <Provider store={store}>
         <App />
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});