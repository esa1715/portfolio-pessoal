import Navbar from '../Navbar'
import TechTools from '../TechTools'
import Resumo from '../Resumo'
import './Main.css'

const Main: React.FC = () => {
  return (
    <main>
      <Resumo />
      <TechTools />
      <Navbar />
    </main>
  )
}

export default Main
