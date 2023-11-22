import { Link } from "react-router-dom";
import { Search, UserCircle2, ShoppingBag, Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between py-4">
      <div className="flex">
        <Menu className="block md:hidden" color="#000" strokeWidth={1.25} />
        <h1 className="text-base md:text-2xl">3legant.</h1>
      </div>
      <nav className="hidden md:flex gap-x-10 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
      <div className="flex">
        <Search className="hidden md:block" color="#000" strokeWidth={1.25} />
        <UserCircle2
          className="hidden md:block"
          color="#000"
          strokeWidth={1.25}
        />
        <ShoppingBag color="#000" strokeWidth={1.25} />
      </div>
    </header>
  );
}
export default Header;
