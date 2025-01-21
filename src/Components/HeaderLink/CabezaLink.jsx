import { Link } from "react-router-dom"
import styles from "./CabezaLink.module.css"

function CabezaLink({url,children}){
    return(
        <Link to={url} className={styles.link}> 
            <button className={styles.button}>
                {children}
            </button>    
        </Link>
    )
}

export default CabezaLink
