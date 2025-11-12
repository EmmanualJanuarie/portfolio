import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './utils/routes'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />}/>
      </Routes>
    </Router>
  )
}

export default App
