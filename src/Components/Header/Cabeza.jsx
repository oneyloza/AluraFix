import { Link } from "react-router-dom";
import styles from "./Cabeza.module.css";
import  logo from "../../Components/Header/Logo negro.png";
import CabezaLink from "../../Components/HeaderLink/CabezaLink";


function Cabeza(){
    return(
        <header className={styles.Cabeza}> 
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="logo Alura"/>
                </section>
            </Link>
                <nav>
                    <CabezaLink url="./">
                        Home 
                    </CabezaLink>
                    <CabezaLink url="./Nuevo video">
                        NuevoVideo
                    </CabezaLink>
                </nav>
        </header>
    )
}

export default Cabeza