import { Link } from "react-router-dom";
import Insta from "../../assets/instagram.png";
import { Youtube } from "lucide-react";
import { Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#232627] text-white flex flex-col items-center py-12 px-8 gap-y-6 sm:w-[100vw] md:w-auto md:items-stretch">
      <div className="flex flex-col items-center md:flex-row md:justify-between  gap-y-10 ">
        <div className="flex flex-col gap-y-5 items-center md:flex-row md:gap-x-5">
          <h4 className="text-2xl">3legant.</h4>
          <p className="text-sm font-normal">Gift & Decoration Store</p>
        </div>

        <nav className="flex flex-col gap-y-7  md:flex-row md:justify-between md:gap-x-10 text-sm font-thin items-center">
          <Link>Home</Link>
          <Link>Shop</Link>
          <Link>Product</Link>
          <Link>Blog</Link>
          <Link>Contact Us</Link>
        </nav>
      </div>

      <hr className="text-[#6C7275] bg-[#6C7275] w-full" />

      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between gap-y-7">
        <div className="flex gap-x-6">
          <img src={Insta} alt="" />
          <Facebook />
          <Youtube />
        </div>

        <div className="flex flex-col gap-y-7 md:flex-row-reverse md:gap-x-7">
          <div className="flex justify-between md: gap-x-7">
            <h4>Privacy Policy</h4>
            <h4>Terms of Use</h4>
          </div>

          <p className="text-sm font-thin">
            Copyright © 2023 3legant. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
