import Img1 from "../../../assets/img.png";
import Img2 from "../../../assets/img (1).png";
import Img3 from "../../../assets/img (2).png";

function Articles() {
  return (
    <div className="container mx-auto px-8 mt-[30px] mb-[30px]">
      <div className="md:flex md:justify-between w-[980px] sm:flex sm:flex-col ">
        <h2 className="flex justify-start font-[500] text-[40px]">Articles</h2>
        <p className="flex justify-end">More Articles →</p>
      </div>
      <div className="mr-[10px] sm:flex flex-col md:flex md:flex-row w-[980px]">
        <div className="flex flex-col mr-[25px]">
          <img src={Img1} alt="" />
          <h4>7 ways to decor your home</h4>
          <p>Read More →</p>
        </div>
        <div className="flex flex-col mr-[25px]">
          <img src={Img2} alt="" />
          <h4>Kitchen organization</h4>
          <p>Read More →</p>
        </div>
        <div className="flex flex-col">
          <img src={Img3} alt="" />
          <h4>Decor your bedroom</h4>
          <p>Read More →</p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
