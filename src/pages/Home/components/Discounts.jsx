import Add from "../../../assets/Add.png";
function Discounts() {
  return (
    <div className="container mx-auto px-8 mt-[20px] sm:flex flex-col md:flex md:flex-row ">
      <img src={Add} alt="" />
      <div className="bg-[#F3F5F7] pl-[72px] pr-[160px] pt-[60px] pb-[60px] text-center md:container mx-auto px-8 ">
        <h5 className="text-[#377DFF] font-[700] text-[16px]">
          SALE UP TO 35% OFF
        </h5>
        <h2 className="font-[500] text-[40px]">
          HUNDREDS of New lower prices!
        </h2>
        <p className="font-[400] text-[20px]">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <p className="font-[400] text-[20px]">Shop Now →</p>
      </div>
    </div>
  );
}

export default Discounts;
