import './App.css';
import Rows from './components/Rows';
import requests from './request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
