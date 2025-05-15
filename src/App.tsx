
import './App.css'
import Header from './components/Header'
import Table from './components/Table'
import CapsuleProvider from './Context/CapsuleContext'

function App() {

  return (
    <CapsuleProvider>
      <Header />
      <Table />
    </CapsuleProvider>
  )
}

export default App
