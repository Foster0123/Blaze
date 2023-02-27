import NavBar from "./shared/NavBar";
import background from './../assets/img/background-1.svg'
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
            <Footer />
        </div>
    )
}
export default HomePage;