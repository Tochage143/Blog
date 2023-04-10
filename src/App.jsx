import './app.css';
import Post from './Post';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout"
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Registerpage from "./pages/Registerpage";
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Indexpage />} />
				<Route path="/login" element={<Loginpage />} />
				<Route path="/Register" element={<Registerpage />} />			</Route>
		</Routes>

	)
}
