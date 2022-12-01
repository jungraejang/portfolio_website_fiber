import City from './components/City'
import Main from './components/Main'

export default function App({ ready }) {
  // const [scrollPosition, setScrollPosition] = useState(0)
  return (
    <>
      <City ready={ready} />
      <Main />
    </>
  )
}
