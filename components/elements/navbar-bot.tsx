import { MapPin, ShoppingBag } from "lucide-react";
import { Separator } from "../ui/separator";

export default function NavbarBot() {
  return (
    <div className="w-full h-10 flex items-center border-1">
      <div className="container flex justify-between items-center h-full">
        <div className="flex items-center gap-4 h-full">
          <div className="flex items-center gap-4">
            <MapPin />
            <span>Bogor</span>
          </div>
          <Separator orientation="vertical"/>
          <div className="flex items-center gap-4">
            <ShoppingBag />
            <span>Purchase this</span>
          </div>
        </div>
        <div className="flex items-center">social</div>
      </div>
    </div>
  );
}
