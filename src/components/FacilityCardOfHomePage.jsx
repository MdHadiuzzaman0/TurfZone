import { getAllFacilities } from "@/lib/data";
import FacilityCard from "@/components/FacilityCard";

const FacilityCardOfHomePage = async () => {
  const facilities = await getAllFacilities();

  if (!facilities || facilities.length === 0) {
    return <p className="text-zinc-500 text-center font-body my-10">No facilities found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {facilities.slice(0, 6).map((facility) => (
        <FacilityCard key={facility._id} facility={facility} />
      ))}
    </div>
  );
};

export default FacilityCardOfHomePage;