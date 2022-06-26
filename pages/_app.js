import { Provider } from 'react-redux';

import store from '@/features/redux/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

import '../styles/index.scss';
import '../styles/normalize.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
