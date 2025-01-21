import React from "react";
import styles from "./NuevoVideo.module.css";

function NuevoVideo() {
    return (
        <main className={styles.nuevoVideoContainer}>
            <h1>Agregar un nuevo video</h1>
            <form className={styles.form}>
                <label htmlFor="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" placeholder="Título del video" />
                
                <label htmlFor="url">URL del video:</label>
                <input type="url" id="url" name="url" placeholder="https://..." />
                
                <button type="submit">Agregar Video</button>
            </form>
        </main>
    );
}

export default NuevoVideo;
