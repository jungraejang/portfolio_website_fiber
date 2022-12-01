import { render } from 'react-dom'
import './styles.css'
import App from './App'
import Intro from './components/Intro'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store/store'
import './fonts/BebasNeue/BebasNeue-Regular.ttf'
import './fonts/Anton/Anton-Regular.ttf'
import './fonts/Roboto/Roboto-Regular.ttf'
import './fonts/BigShoulders/BigShouldersText-Regular.ttf'

render(
  <Provider store={store}>
    <Intro>
      <App />
    </Intro>
  </Provider>,
  document.getElementById('root')
)
