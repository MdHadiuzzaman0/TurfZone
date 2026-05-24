"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { IoFlameSharp } from "react-icons/io5";
import Image from "next/image";

const LoginPage = () => {
    const router = useRouter();

    async function handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: loginData.email,
            password: loginData.password,
        });
        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Login successful!');
            router.push('/');
            router.refresh()
        }
    }

    const handleSignInWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className="min-h-[calc(100vh-68px)] w-full bg-arenaBg relative flex items-center justify-center p-4 sm:p-8 overflow-hidden text-white">

            <div className="absolute inset-0 z-0 opacity-15">
                <Image
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop"
                    alt="Basketball Court" fill
                    className="w-full h-full object-cover scale-105 blur-[2px]"
                />
            </div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-arenaOrange/10 rounded-full blur-[120px] z-0 pointer-events-none" />

            <div className="w-full max-w-5xl bg-zinc-950/70 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-b lg:bg-gradient-to-r from-black/50 to-transparent border-b lg:border-b-0 lg:border-r border-white/5">

                    <div className="my-8 lg:my-0 space-y-4 text-left">
                        <h1 className="text-3xl font-sports font-black uppercase tracking-wide leading-tight">
                            Welcome Back <br /> to the Arena
                        </h1>
                        <p className="text-zinc-400 font-body text-xs leading-relaxed">
                            Sign in to get back to the pitch, manage active schedules, and secure your upcoming match bookings.
                        </p>

                        <div className="flex items-center gap-2 font-body text-xs text-zinc-300 pt-2">
                            <IoFlameSharp className="text-arenaOrange text-base" />
                            <span>Syncing facility ledger instantly.</span>
                        </div>
                        <div className="flex items-center gap-2 font-body text-xs text-zinc-300 pt-2">
                            <IoFlameSharp className="text-arenaOrange text-base" />
                            <span>Connecting with real-time field status.</span>
                        </div>
                        <div className="flex items-center gap-2 font-body text-xs text-zinc-300 pt-2">
                            <IoFlameSharp className="text-arenaOrange text-base" />
                            <span>Streaming live pitch availability.</span>
                        </div>
                    </div>

                    <div className="hidden lg:block text-[10px] text-zinc-600 font-mono">
                        SECURE AUTH PROTOCOL // 2026
                    </div>
                </div>

                <div className="lg:col-span-7 p-8 lg:p-12 bg-black/30 backdrop-blur-md flex flex-col justify-center">
                    <div className="w-full max-w-md mx-auto space-y-6">

                        <div className="text-left">
                            <h2 className="text-xl font-sports font-black uppercase tracking-wider">Sign In</h2>
                            <p className="text-zinc-500 font-body text-xs mt-1">Enter your gaming arena credentials</p>
                        </div>

                        <Button
                            onPress={handleSignInWithGoogle}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 bg-zinc-900/60 hover:bg-zinc-900 border border-white/5 hover:border-white/10 text-white text-sm py-6 rounded-xl transition-all cursor-pointer"
                        >
                            <FaGoogle className="w-4 h-4 text-arenaOrange" />
                            <span>Sign-In with Google</span>
                        </Button>

                        <div className="relative flex items-center justify-center text-[9px] uppercase tracking-widest text-white/20">
                            <div className="w-full border-t border-white/5"></div>
                            <span className="bg-zinc-950 px-3 absolute">Or regular sign-in</span>
                        </div>

                        <Form onSubmit={handleLogin} className="space-y-4 font-body text-left">
                            <TextField isRequired name="email" type="email" validate={(v) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v) ? "Invalid email" : null}>
                                <Label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Email Address</Label>
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus-within:border-arenaOrange/60 transition-colors mt-1">
                                    <Input type="email" placeholder="name@example.com" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600" />
                                </div>
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <TextField isRequired minLength={8} name="password" type="password">
                                <Label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Password</Label>
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus-within:border-arenaOrange/60 transition-colors mt-1">
                                    <Input type="password" placeholder="••••••••" className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600" />
                                </div>
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <Button type="submit" className="w-full bg-arenaOrange hover:bg-orange-600 text-white font-sports font-black text-base uppercase tracking-wider py-6 rounded-xl mt-4 cursor-pointer transition-all shadow-lg shadow-arenaOrange/10">
                                Login
                            </Button>
                        </Form>

                        <p className="text-center font-body text-xs text-white/50 pt-2">
                            Don't have an account yet? <Link href="/register" className="text-arenaOrange hover:underline font-semibold">Sign-up here</Link>
                        </p>
                    </div>
                </div>

                <div className="lg:hidden p-4 text-center text-[9px] text-zinc-600 font-mono border-t border-white/5 bg-black/40">
                    TURFZONE AUTH SYSTEMS // 2026
                </div>

            </div>
        </div>
    );
};

export default LoginPage;