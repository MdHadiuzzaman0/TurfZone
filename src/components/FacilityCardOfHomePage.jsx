import { getAllFacilities } from "@/lib/data";
import FacilityCard from "@/components/FacilityCard";
import Link from "next/link"; 
import { Button } from "@heroui/react";

const FacilityCardOfHomePage = async () => {
  const facilities = await getAllFacilities();

  if (!facilities || facilities.length === 0) {
    return <p className="text-zinc-500 text-center font-body my-10">No facilities found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-15">
      {facilities.slice(0, 6).map((facility) => (
        <FacilityCard key={facility._id} facility={facility} />
      ))}

      <div className="mt-12 text-center">
        <Link href="/facilities">
          <Button 
            variant="solid"
            className="bg-arenaOrange hover:bg-orange-600 text-white font-sports font-black uppercase tracking-wider px-8 py-3.5 rounded-md transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-orange-600/10 cursor-pointer text-sm"
          >
            View All Facilities
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default FacilityCardOfHomePage;