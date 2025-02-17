import Navbar from '../../components/navbar/navbar'
import Wrapper from "../../components/container/container"
import style from "./home.module.css"
import { Link } from 'react-router-dom'

// this filename should be Home.jsx

function Home() {
    return (
        <div>
            <Wrapper>
                <div>
                    <Navbar />
                    <Link className={style.LinkButtom} to="/add" tabIndex="0">Add New Movie</Link>
                </div>
            </Wrapper>
        </div>
    );
}
export default Home





