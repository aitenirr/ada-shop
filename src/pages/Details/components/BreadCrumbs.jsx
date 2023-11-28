import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function BreadCrumbs() {
  return (
    <div className="flex items-center text-[#605F5F] text-xs gap-x-1">
      <Link>Home</Link>
      <ChevronRight size={12} />
      <Link>Shop</Link>
      <ChevronRight size={12} />
      <Link>Living Room</Link>
      <ChevronRight size={12} />
      <Link>Product</Link>
    </div>
  );
}

export default BreadCrumbs;
