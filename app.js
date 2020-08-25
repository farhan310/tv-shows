import React from 'react';
import ReactDOM from 'react-dom';

import Product from './componants/Product';

const App = () => (
  <div>
    <Product raw="🐓" cooked="🍗" />
    <Product raw="🥚" cooked="🍳" />
    <Product raw="🐄" cooked=" 🍔" />
    <Product raw="🥔" cooked="🍟" />
    <Product raw="🦐" cooked="🍤" />
    <Product raw="🌽" cooked="🍿" />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
