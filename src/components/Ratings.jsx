// src/components/StaticRating.jsx
import { IoMdStar } from "react-icons/io";

const StaticRating = () => {
  return (
    <div className="bg-black py-16 px-6 border-y border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Stat 1 */}
        <div className="p-6 bg-arenaCard rounded-xl border border-white/5 space-y-2">
          <div className="flex justify-center text-arenaOrange text-3xl">
            {[...Array(5)].map((_, i) => <IoMdStar key={i} />)}
          </div>
          <h3 className="text-4xl font-sports font-black text-white uppercase">4.9 / 5.0</h3>
          <p className="text-zinc-500 font-body text-sm uppercase tracking-wider font-bold">User Rating (1.2k+ Reviews)</p>
        </div>

        {/* Stat 2 */}
        <div className="p-6 bg-arenaCard rounded-xl border border-white/5 space-y-2 flex flex-col justify-center">
          <h3 className="text-4xl font-sports font-black text-arenaOrange uppercase">99.2%</h3>
          <p className="text-white font-sports font-bold uppercase tracking-wide text-lg">Seamless Booking</p>
          <p className="text-zinc-500 font-body text-xs">Match-day slots reserved perfectly without conflicts.</p>
        </div>

        {/* Stat 3 */}
        <div className="p-6 bg-arenaCard rounded-xl border border-white/5 space-y-2 flex flex-col justify-center">
          <h3 className="text-4xl font-sports font-black text-white uppercase">25K+</h3>
          <p className="text-zinc-500 font-body text-sm uppercase tracking-wider font-bold">Active Athletes Served</p>
          <p className="text-zinc-400 font-body text-xs mt-1">Trusted by local teams, turf owners, and solo players.</p>
        </div>

      </div>
    </div>
  );
};

export default StaticRating;