import NavBar from "./shared/NavBar";
import background from './../assets/img/background-2.svg'
import logo from './../assets/img/blaze.png';
import { useEffect, useState } from "react";
import Footer from "./shared/Footer";

const HomePage = () => {
    const [ data, setData ] = useState(null)
    // useEffect(() => {
    //     fetch("http://localhost:3000")
    //     .then(result => result.json())
    //     .then((result: any) => setData(result.error))
    //     .catch((err) => console.error(err))
    // }, [])
    return(
        <div className="index-page" style={{ backgroundImage: `url(${background})` }}>
            <NavBar />
            <section className="index-image-section">
                <img className="index-logo" src={logo}  alt="App Logo"/>
            </section>
            <Footer />
        </div>
    )
}
export default HomePage;