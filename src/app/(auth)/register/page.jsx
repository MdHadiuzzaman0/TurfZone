"use client";
import { FaGoogle } from "react-icons/fa6";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Image from "next/image";

const RegisterPage = () => {
    const router = useRouter();

    async function handleRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const registerData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: registerData.email,
            password: registerData.password,
            name: registerData.name,
            image: registerData.image,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Sign-up successful!');
            router.push('/login');
        }
    }

    const handleSignUpWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className="min-h-[calc(100vh-68px)] w-full bg-arenaBg relative flex items-center justify-center p-4 sm:p-8 overflow-hidden text-white">

            <div className="absolute inset-0 z-0 opacity-55">
                <Image
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"
                    alt="Stadium"
                    fill
                    priority
                    className="object-cover scale-105 blur-[2px]"
                />
            </div>
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-arenaOrange/10 rounded-full blur-[120px] z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-arenaOrange/5 rounded-full blur-[150px] z-0 pointer-events-none" />

            <div className="w-full max-w-5xl bg-zinc-950/70 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-b lg:bg-gradient-to-r from-black/50 to-transparent border-b lg:border-b-0 lg:border-r border-white/5">

                    <div className="my-8 lg:my-0 space-y-5 text-left">
                        <h1 className="text-3xl font-sports font-black uppercase tracking-wide leading-tight">
                            Join The <span className="text-arenaOrange">Ultimate</span> Arena
                        </h1>
                        <p className="text-zinc-400 font-body text-xs leading-relaxed">
                            Get instant access to 50+ premium turfs, real-time slot tracking, and match-day community systems.
                        </p>

                        <div className="space-y-2.5 font-body text-xs text-zinc-300 pt-2">
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircleSharp className="text-arenaOrange text-base flex-shrink-0" />
                                <span>10K+ Active athletes already onboard</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircleSharp className="text-arenaOrange text-base flex-shrink-0" />
                                <span>Zero scheduling conflicts guaranteed</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-72 mt-6 flex items-center justify-center group select-none">

                        <div className="absolute w-44 h-60 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out -rotate-12 -translate-x-10 group-hover:-rotate-6 group-hover:-translate-x-24 group-hover:-translate-y-3 z-10 border border-white/10 shadow-black/60">
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Thunder Cricket Academy"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute inset-0 p-3 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-lg bg-black/50 backdrop-blur-md p-1.5 rounded-xl border border-white/10">🏏</span>
                                    <span className="text-[9px] font-mono bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-zinc-300 uppercase tracking-widest">Mirpur</span>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-sports font-black uppercase text-xs tracking-wide text-white leading-tight line-clamp-1">
                                        Thunder Cricket
                                    </h4>
                                    <p className="text-[10px] font-mono text-arenaOrange font-bold mt-0.5">
                                        ৳ 1500/hr
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute w-44 h-60 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out rotate-12 translate-x-10 group-hover:rotate-6 group-hover:translate-x-24 group-hover:-translate-y-3 z-10 border border-white/10 shadow-black/60">
                            <Image
                                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop"
                                alt="Smash Point Badminton Club"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute inset-0 p-3 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-lg bg-black/50 backdrop-blur-md p-1.5 rounded-xl border border-white/10">🏸</span>
                                    <span className="text-[9px] font-mono bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-zinc-300 uppercase tracking-widest">Gulshan</span>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-sports font-black uppercase text-xs tracking-wide text-white leading-tight line-clamp-1">
                                        Smash Point
                                    </h4>
                                   <div className="flex items-center justify-between pt-2">
                                        <p className="text-xs font-mono text-white font-bold">৳ 1000/hr</p>
                                        <span className="text-[9px] text-zinc-300 font-body bg-white/10 px-1.5 py-0.5 rounded border border-white/5">60 Bookings</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="absolute w-52 h-64 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out z-20 group-hover:-translate-y-5 border border-white/15 shadow-black/90">
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1682435573900-b55886ec0e0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb3RiYWxsJTIwdHVyZnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Premier Football Arena"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/30 to-black/10" />
                            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-arenaOrange/50 to-transparent" />

                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl bg-arenaOrange/20 backdrop-blur-md border border-arenaOrange/30 p-1.5 rounded-xl">⚽</span>
                                    <div className="bg-arenaOrange/20 border border-arenaOrange/40 px-2 py-1 rounded-md backdrop-blur-md flex items-center">
                                        <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">Top Booked</span>
                                    </div>
                                </div>

                                <div className="text-left space-y-0.5">
                                    <span className="text-[9px] font-mono uppercase tracking-widest text-arenaOrange block">Banani, Dhaka</span>
                                    <h3 className="font-sports font-black uppercase text-sm tracking-wide text-white leading-none">
                                        Premier Football Arena
                                    </h3>
                                    <div className="flex items-center justify-between pt-2">
                                        <p className="text-xs font-mono text-white font-bold">৳ 2000/hr</p>
                                        <span className="text-[9px] text-zinc-300 font-body bg-white/10 px-1.5 py-0.5 rounded border border-white/5">🔥 210 Bookings</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="hidden lg:block text-[10px] text-zinc-600 font-mono">
                        TURFZONE ECOSYSTEM // 2026
                    </div>
                </div>

                <div className="lg:col-span-7 p-8 lg:p-12 bg-black/30 backdrop-blur-md flex flex-col justify-center">
                    <div className="w-full max-w-md mx-auto space-y-6">

                        <div className="text-left">
                            <h2 className="text-xl font-sports font-black uppercase tracking-wider">Create Account</h2>
                            <p className="text-zinc-500 font-body text-xs mt-1">Start your journey in seconds.</p>
                        </div>

                        <Button
                            onPress={handleSignUpWithGoogle}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 hover:border-white/10 text-white text-sm py-6 rounded-xl transition-all cursor-pointer"
                        >
                            <FaGoogle className="w-4 h-4 text-arenaOrange" />
                            <span>Sign up with Google</span>
                        </Button>

                        <div className="relative flex items-center justify-center text-[9px] uppercase tracking-widest text-white/20">
                            <div className="w-full border-t border-white/5"></div>
                            <span className="bg-zinc-950 px-3 absolute">Or via email</span>
                        </div>

                        <Form onSubmit={handleRegister} className="space-y-4 font-body text-left">
                            <TextField isRequired name="name" type="text">
                                <Label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Full Name</Label>
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus-within:border-arenaOrange/60 transition-colors mt-1">
                                    <Input type="text" placeholder="John Doe" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600" />
                                </div>
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <TextField isRequired name="image" type="url">
                                <Label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Image URL</Label>
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus-within:border-arenaOrange/60 transition-colors mt-1">
                                    <Input type="url" placeholder="https://example.com/avatar.jpg" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600" />
                                </div>
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <TextField isRequired name="email" type="email" validate={(v) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v) ? "Invalid email" : null}>
                                <Label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Email Address</Label>
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus-within:border-arenaOrange/60 transition-colors mt-1">
                                    <Input type="email" placeholder="name@example.com" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600" />
                                </div>
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <TextField isRequired minLength={8} name="password" type="password" validate={(v) => v.length < 8 || !/[A-Z]/.test(v) || !/[0-9]/.test(v) ? "Weak password" : null}>
                                <Label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Password</Label>
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus-within:border-arenaOrange/60 transition-colors mt-1">
                                    <Input type="password" placeholder="••••••••" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600" />
                                </div>
                                <Description className="text-[9px] text-zinc-500 mt-1 block">Min. 8 chars, 1 uppercase, 1 number</Description>
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <Button type="submit" className="w-full bg-arenaOrange hover:bg-orange-600 text-white font-sports font-black text-base uppercase tracking-wider py-6 rounded-xl mt-4 cursor-pointer transition-all shadow-lg shadow-arenaOrange/10">
                                Sign-up
                            </Button>
                        </Form>

                        <p className="text-center font-body text-xs text-white/50 pt-2">
                            Already configured? <Link href="/login" className="text-arenaOrange hover:underline font-semibold">Login here</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;