import Banner from "components/Banner";
import styles from "./NuevoVideo.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useNuevoVideoContext } from "context/NuevoVideo";

function NuevoVideo() {
  const { NuevoVideo } = useNuevoVideoContext();

  return (
    <>
      <Banner img="favorite" color="#44d97d" />
      <Titulo>
        <h1>Mis NuevoVideo</h1>
      </Titulo>
      <section className={styles.container}>
        {NuevoVideo.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default NuevoVideo;
