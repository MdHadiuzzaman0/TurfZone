"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

const NavbarRight = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <div className="text-zinc-500 font-mono text-xs animate-pulse">
            Loading....</div>
    }

    async function logout() {
        await authClient.signOut();
        router.push('/login');
        router.refresh()
    }

    return (
        <div className="navbar-end">
            {!session && (
                <div className="flex items-center gap-4 font-sports text-lg uppercase text-white mr-2">
                    <Link href="/login" className="hover:text-arenaOrange transition-colors">Login</Link>
                    <Link href="/register" className="text-arenaOrange hover:underline">Register</Link>
                </div>
            )}

            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-900 border border-white/10 hover:border-arenaOrange/50 p-1 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 group cursor-pointer"
                >
                    {session ? (
                        <div className="flex items-center gap-2.5">
                            <div className="relative p-0.5 rounded-lg bg-zinc-800 group-hover:bg-arenaOrange/20 border border-white/5 group-hover:border-arenaOrange/40 transition-all duration-300">
                                <Avatar className="w-8 h-8 rounded-lg">
                                    <Avatar.Image alt={user?.name || "User"} src={user?.image} className="rounded-lg object-cover" />
                                    <Avatar.Fallback className="rounded-lg bg-arenaOrange text-white font-sports font-bold text-xs">
                                        {user?.name?.charAt(0)}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>

                            <div className="flex flex-col text-left">
                                <span className="text-xs font-body text-zinc-400 group-hover:text-white font-semibold tracking-wide transition-colors duration-200">
                                    {session.user.name}
                                </span>
                                <span className="text-[9px] font-mono uppercase tracking-widest text-arenaOrange font-medium">
                                    Player
                                </span>
                            </div>

                            <div className="ml-1 bg-white/5 group-hover:bg-arenaOrange/10 p-0.5 rounded-md transition-colors">
                                {isOpen ? (
                                    <RiArrowDropUpLine className="text-xl text-arenaOrange animate-fade-in" />
                                ) : (
                                    <RiArrowDropDownLine className="text-xl text-zinc-500 group-hover:text-arenaOrange transition-colors" />
                                )}
                            </div>
                        </div>
                    ) : (
            
                        <div className=" text-zinc-400 group-hover:text-arenaOrange transition-colors">
                            <IoMenu className="text-xl" />
                        </div>
                    )}
                </div>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-zinc-950 rounded-xl z-50 mt-3 w-56 p-3 shadow-2xl gap-1.5 font-sports text-sm uppercase text-zinc-300 border border-white/5 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
                >
                    <div className="px-3 py-1.5 mb-1 border-b border-white/5 md:hidden">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Navigation</p>
                    </div>

                    <li>
                        <Link href="/" className="hover:bg-white/5 hover:text-arenaOrange rounded-lg px-3 py-2 transition-all">Home</Link>
                    </li>
                    <li>
                        <Link href="/facilities" className="hover:bg-white/5 hover:text-arenaOrange rounded-lg px-3 py-2 transition-all">All Facilities</Link>
                    </li>

                    {session && (
                        <>
                            <div className="px-3 py-1.5 my-1 border-b border-white/5 border-t border-white/5">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Dashboard Actions</p>
                            </div>

                            <li>
                                <Link href="/myBookings" className="hover:bg-white/5 hover:text-arenaOrange rounded-lg px-3 py-2 transition-all">My Bookings</Link>
                            </li>
                            <li>
                                <Link href="/addFacility" className="hover:bg-white/5 hover:text-arenaOrange rounded-lg px-3 py-2 transition-all">Add Facility</Link>
                            </li>
                            <li>
                                <Link href="/manageFacilities" className="hover:bg-white/5 hover:text-arenaOrange rounded-lg px-3 py-2 transition-all">My Facilities</Link>
                            </li>

                            <li className="mt-1 border-t border-white/5 pt-1.5">
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-white hover:bg-arenaOrange/10 hover:text-arenaOrange transition-all"
                                >
                                    <LuLayoutDashboard className="w-4 h-4 text-arenaOrange" />
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <Button
                                    onClick={logout}
                                    type="button"
                                    className="text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 text-left w-full px-3 py-2 bg-transparent border-none justify-start flex items-center gap-2.5 cursor-pointer h-auto font-sports text-sm uppercase rounded-lg transition-all"
                                >
                                    <FiLogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NavbarRight;