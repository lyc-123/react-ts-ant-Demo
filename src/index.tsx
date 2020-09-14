import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRouter from './APPRouter'
import registerServiceWorker from './registerServiceWorker';
import 'lib-flexible'
ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
