import styles from "./Pie.module.css";
import logo from "../../Components/Footer/Footer.png";

function Pie() {
  return (
  <footer className={styles.pie}>
  <img className={styles.imgpie} src={logo} alt="Alura"/><h2 className={styles.texto}> Desarrollado por Dorian Loza</h2>
  
  </footer>
  );
}
export default Pie;
