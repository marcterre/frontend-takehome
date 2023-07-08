import RoutingButton from "../components/Utils/RoutingButton/RoutingButton";
import styles from "./page.module.css";

export const Home = () => {
  return (
    <main className={styles.main}>
      <h2>Start your Quiz</h2>
      <RoutingButton direction="start" />
    </main>
  );
};
export default Home;
