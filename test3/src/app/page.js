import Navbar from '../components/navbar.js'

export default function MyApp() {
  return (
    <>
    <Navbar />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);