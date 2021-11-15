import './App.css';
import Row from './components/row/index';
import Banner from './components/banner/index';
import Navbar from './components/navbar/index'; 
import { requests } from './services/externalUrl';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Netflix Originals" url={requests['netflixOriginals']} isLarge={true}/>
      <Row title="Trending" url={requests['trending']} isLarge={false}/>
      <Row title="Top Rated" url={requests['topRated']} isLarge={false}/>
      <Row title="Action Movies" url={requests['actionMovies']} isLarge={false}/>
      <Row title="Comedy Movies" url={requests['comedyMovies']} isLarge={false}/>
      <Row title="Horror Movies" url={requests['horrorMovies']} isLarge={false}/>
      <Row title="Romance Movies" url={requests['romanceMovies']} isLarge={false}/>
      <Row title="Documentries" url={requests['documentaries']} isLarge={false}/>

    </div>
  );
}

export default App;
