import 'normalize.css';
import ReactDOM from 'react-dom';
import './global/index.scss';

import App from './App';

ReactDOM.render(
  <App />,
  document.querySelector('.app')
);

module.hot.accept();
