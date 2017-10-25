import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

const Index = () => {
  return <App store={store} />
}

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker();
