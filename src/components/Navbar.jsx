import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import NavLink from "./NavLink";
import NavbarRight from "./NavbarRight";
import TurfZoneIcon from "@/components/TurfZoneIcon";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="navbar bg-arenaCard shadow-md border-b border-white/5 px-4">
      <div className="navbar-start flex items-center gap-3 z-10">
        <div className="bg-arenaOrange/10 p-1 border border-arenaOrange/30 rounded-xl flex items-center justify-center backdrop-blur-md">
          <Image
            width="32"
            height="32"
            src="https://img.icons8.com/external-skrata-royyan-wijaya/32/external-athlete-sportify-gradak-skrata-royyan-wijaya-23.png"
            alt="TurfZone Logo"
            className="invert-[53%] sepia-[86%] saturate-[2400%] hue-rotate-[360deg] brightness-[95%] contrast-[101%]"
          />
        </div>
        <Link href='/'>
          <span className="font-sports font-black text-2xl uppercase tracking-wider block leading-none">
            Turf<span className="text-arenaOrange">Zone</span>
          </span>
          <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-0.5 block">
            Elevate Your Game
          </span>
        </Link>
      </div>

      {!session ? (
        <div className="navbar-center hidden lg:flex items-center gap-6 font-sports text-xl uppercase tracking-wider">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/facilities">All Facilities</NavLink>
        </div>
      ) : (
        <div className="navbar-center hidden lg:flex items-center gap-6 font-sports text-xl uppercase tracking-wider">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/facilities">All Facilities</NavLink>
          <NavLink href="/myBookings">My Bookings</NavLink>
          <NavLink href="/addFacility">Add Facility</NavLink>
          <NavLink href="/manageFacilities">Manage Facilities</NavLink>
        </div>
      )}

      <div className="navbar-end">
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
