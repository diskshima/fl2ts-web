import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';
import { App } from './components/App';

ReactDOM.render(
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <App />
  </div>,
  document.getElementById("app")
);
