import "./HomeScreen.css";
import { Nav, Banner, Row } from "./components";
import requests from "./constants/Requests";

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* HomeScreen */}
        <Nav />
        <Banner />
        <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        />
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorroMovies} />
        <Row title="Romance Moives" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentries} />
    </div>
  )
}

export default HomeScreen