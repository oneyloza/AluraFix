/*import Cabeza from "../../Components/Header/Cabeza";*/
/*import Pie from "../../Components/Footer/Pie";*/
import Banner from "../../Components/Banner/Banner";
import Titulo from "../../Components/Titulo/Titulo";
import Cards from "../../Components/Cards/Cards";
import styles from "./index.module.css";
import videos from "../../data/db.json";

function Inicio(){
    return(
    <>
        
        <Banner></Banner>
        <Titulo>
            <h1>Clasifica y disfruta tus videos</h1>
        </Titulo>
        
        <section className={styles.container}>
        {videos.map((video)=>{
            return <Cards {...video} key={video.id}/>

        })}

        </section>


        
    </>    
    )
}

export default Inicio;