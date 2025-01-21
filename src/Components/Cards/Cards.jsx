import styles from "./Cards.module.css"

function Cards({id, capa, titulo}){
    return( 
    <div className={styles.contenedor}>
        <img src={capa} alt={titulo} className={styles.capa}/>
    <h2>{titulo}</h2> 

    </div>
    )
}

export default Cards