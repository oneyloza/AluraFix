import styles from "./Banner.module.css";
import logo from "../../Components/Banner/bannerCom.png";

function Banner() {
  return (
  <div   className={styles.Banner}>
      <img className={styles.img} src={logo} alt="Alura"/>
  
  </div>
  );
}
export default Banner;
