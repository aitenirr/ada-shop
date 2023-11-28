import LivingRoom from "../../../assets/living-room.png";
import Bedroom from "../../../assets/bedroom.png";
import Kitchen from "../../../assets/Paste image.png";

function Categories() {
  return (
    <div className="container mx-auto px-8 flex flex-col gap-y-4 md:flex-row md:gap-x-6 mb-12 ">
      <div
        style={{ "--image-url": `url(${LivingRoom})` }}
        className="bg-[image:var(--image-url)] bg-[#F3F5F7] h-[377px] bg-center bg-no-repeat bg-contain p-8 flex-auto"
      >
        <h2>Living room</h2>
        <button className="btn border-b border-b-black">Shop now →</button>
      </div>
      <div className="flex flex-col gap-y-4 flex-auto">
        <div
          style={{ "--image-url": `url(${Kitchen})` }}
          className="bg-[image:var(--image-url)] bg-[#F3F5F7] h-[180px] bg-center bg-no-repeat bg-contain p-4"
        >
          <h2>Kitchen</h2>
          <button className="btn border-b border-b-black">Shop now →</button>
        </div>
        <div
          style={{ "--image-url": `url(${Bedroom})` }}
          className="bg-[image:var(--image-url)] bg-[#F3F5F7] h-[180px] bg-center bg-no-repeat bg-contain p-4"
        >
          <h2>Bedroom</h2>
          <button className="btn border-b border-b-black">Shop now →</button>
        </div>
      </div>
    </div>
  );
}
export default Categories;
