import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';

// Import the reducer and create a store
import { reducer } from './todoListRedux';

// Add the autoRehydrate middleware to your redux store
const store = createStore(reducer, undefined, autoRehydrate());

// Enable persistence
persistStore(store);

// Import the App container component
import App from './App';

// Pass the store into the Provider
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
