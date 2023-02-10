import NavBar from "./shared/NavBar";
import background from './../assets/img/background-1.svg'

const HomePage = () => {
    return(
        <div className="index-page" style={{backgroundImage: `url(${background})`}}>
            <NavBar />
        </div>
    )
}
export default HomePage;