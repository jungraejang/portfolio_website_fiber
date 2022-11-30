import { render } from 'react-dom'
import './styles.css'
import App from './App'
import Intro from './components/Intro'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store/store'

render(
  <Provider store={store}>
    <Intro>
      <App />
    </Intro>
  </Provider>,
  document.getElementById('root')
)
