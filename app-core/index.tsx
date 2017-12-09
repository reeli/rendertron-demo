import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './root/Root';

class App extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
