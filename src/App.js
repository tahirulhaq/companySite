import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { AboutUs } from './components/AboutUs'
import { ContactUs } from './components/ContactUs'
function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<AboutUs />} />
				<Route exact path='/contact' element={<ContactUs />} />
			</Routes>
		</Router>
	)
}

export default App
