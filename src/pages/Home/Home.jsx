import Header from "../../components/Header/Header";
import { Truck, Banknote, LockKeyhole, Phone } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Heroimg from "../../assets/Heroimg.png";
import Heroimg2 from "../../assets/Heroimg1.png";
import Heroimg1 from "../../assets/Heroimg2.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Footer from "../../components/Footer/Footer";
import Discounts from "./components/Discounts";
import Articles from "./components/Articles";
import ProductList from "../../components/ProductList/ProductList";

function Home() {
  return (
    <div className="px-8 max-w-[1440px] mx-auto">
      <div className="lg:px-[160px] sm:h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Carousel showThumbs={false} showStatus={false}>
            <img src={Heroimg2} alt="" className="h-full" />
            <img src={Heroimg1} alt="" className="h-full" />
            <img src={Heroimg} alt="" className="h-full" />
          </Carousel>
        </div>
      </div>

      <div className=" lg:px-[160px] flex flex-col ">
        <h1> Simply Unique/ Simply Better.</h1>
        <p>
          3legant is a gift & decorations store based in HCMC, Vietnam. Est
          since 2019.
        </p>
      </div>
      <ProductList />
      <div className="lg:mx-[160px] flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6">
        <ServiceCard
          Icon={Truck}
          title="Free shipping"
          description="Order above 200$"
        />
        <ServiceCard
          Icon={Banknote}
          title="Money-back"
          description="30 days guarentee"
        />
        <ServiceCard
          Icon={LockKeyhole}
          title="Secure Payments"
          description="Secured by Stripe"
        />
        <ServiceCard
          Icon={Phone}
          title=" Support 24/7"
          description="Phone and email support"
        />
        <Discounts />
        <Articles />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
