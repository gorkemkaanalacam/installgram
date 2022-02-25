import * as React from 'react';
import { Provider } from './src/context';
import Root from './src/navigators/Root';

export default App = () => {
  return (
    <Provider>
      <Root />
    </Provider>
  );
}
