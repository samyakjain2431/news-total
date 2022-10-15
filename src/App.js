import Header from './Components/Header'
import News from './Components/News'
import './style.css'
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
  

function App() {
	return (
	<>
	<BrowserRouter>
	<Header/>
	<Routes>
      <Route exact path="/" element={<News key="National" nkey="National" category="national"/>}/>
      <Route exact path="/business" element={<News key="business" nkey="Business" category="business"/>}/>
      <Route exact path="/entertainment" element={<News key="entertainment" nkey="Entertainment" category="entertainment"/>}/>
      <Route exact path="/startup" element={<News key="startup" nkey="Startup" category="startup"/>}/>
      <Route exact path="/science" element={<News key="science" nkey="Science" category="science"/>}/>
      <Route exact path="/sports" element={<News key="sports" nkey="Sports" category="sports"/>}/>
      <Route exact path="/technology" element={<News key="technology" nkey="Technology" category="technology"/>}/>
	</Routes>
  	</BrowserRouter>	
	</>
	)
}

export default App;
