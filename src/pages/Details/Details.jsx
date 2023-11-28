import Header from "../../components/Header/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import Slider from "./components/Slider";

function Details() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="container mx-auto px-8">
        <Header />
        <BreadCrumbs />
        <Slider />
      </div>
    </div>
  );
}
export default Details;
