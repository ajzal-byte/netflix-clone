import "./HomeScreen.css";
import { Nav, Banner } from "./components";

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* HomeScreen */}
        <Nav />
        <Banner />
        {/* <Row /> */}
    </div>
  )
}

export default HomeScreen