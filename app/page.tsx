import RoutingButton from "@/components/Utils/RoutingButton/RoutingButton";
import "./page.styles.scss";
import Image from "next/image";

export const Home = () => {
  return (
    <main className="main">
      <div className="title-wrapper">
        <h1 className="title">Muffin Dilemma</h1>
      </div>
      <div className="image-wrapper">
        <div className="subtitle-wrapper">
          <h2 className="subtitle">To eat or not to eat?</h2>
        </div>
        <Image
          src="/../public/muffin.png"
          alt="muffin"
          width={100}
          height={100}
          className="image"
        />
      </div>
      <div className="button-wrapper">
        <RoutingButton direction="start" type="button" />
      </div>
    </main>
  );
};
export default Home;
