import './app.css';
import Post from './Post';
import Header from './Header';
import {Routes,Route} from 'react-router-dom';

export default function App() {
  return (
<Routes>
	<Route index element={
<main> 
 <Header/>
<Post/>
 </main>	
	} />
	<Route path={"/login"}/>
</Routes>
	  
  )
}
