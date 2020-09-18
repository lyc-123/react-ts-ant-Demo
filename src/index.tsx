import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './APPRouter'
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.min.css'
import 'lib-flexible'

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
