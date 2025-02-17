import Navbar from "../../components/navbar/navbar";
import Wrapper from "../../components/container/container";
import style from "./home.module.css";
import { Link } from "react-router-dom";

// this filename should be Home.jsx
// the <div> tags are not necessary, the stlyling can be done in the Wrapper component

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Link className={style.LinkButtom} to="/add" tabIndex="0">
        Add New Movie
      </Link>
    </Wrapper>
  );
}
export default Home;
