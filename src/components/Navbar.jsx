import Link from "next/link";
import NavLink from '@/components/NavLink';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar bg-arenaBg shadow-sm px-4">
            <div className="navbar-start">
                <Link href="/" className="text-3xl font-sports font-bold tracking-tight uppercase">
                    Arena<span className="text-arenaOrange italic">Pulse</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex items-center gap-6 font-sports text-xl uppercase tracking-wider">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/allFacilities">All Facilities</NavLink>
                <NavLink href="/myBookings">My Bookings</NavLink>
                <NavLink href="/addFacility">Add Facility</NavLink>
                <NavLink href="/manageFacilities">Manage Facilities</NavLink>
            </div>


            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-2xl text-white">
                        <IoMenu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-arenaCard rounded-box z-50 mt-3 w-52 p-4 shadow-lg gap-3 font-sports text-lg uppercase"
                    >
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/allFacilities">All Facilities</NavLink></li>
                        <li><NavLink href="/myBookings">My Bookings</NavLink></li>
                        <li><NavLink href="/addFacility">Add Facility</NavLink></li>
                        <li><NavLink href="/manageFacilities">My Facilities</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar