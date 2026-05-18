'use client'
import Link from 'next/link';

const LoginPage = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // Better Auth বা লগইন লজিক এখানে বসবে
        console.log({ email, password });
    };

    return (
        <div className="min-h-[calc(100vh-68px)] flex items-center justify-center px-4 bg-arenaBg">
            <div className="w-full max-w-md bg-arenaCard p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-sports font-bold text-center uppercase tracking-wide mb-6">
                    Login to <span className="text-arenaOrange">ArenaPulse</span>
                </h2>

                <form onSubmit={handleLogin} className="space-y-4 font-body">
                     {/* Email Input */}
                    <div className="space-y-2">
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-xs font-mono uppercase tracking-widest text-zinc-400">Email Address</Label>
                            <div className="flex items-center bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-cyan-500 transition-colors group">
                                <Mail className="w-4 h-4 text-zinc-600 group-focus-within:text-cyan-500 transition-colors mr-3" />
                                <Input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600"
                                />
                            </div>
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Password Input*/}
                    <div className="space-y-2">
                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <Label isRequired className="text-xs font-mono uppercase tracking-widest text-zinc-400">Password</Label>
                                <Link href="/signup" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors">Forgot?</Link>
                            </div>
                            <div className="flex items-center bg-zinc-900 border border-zinc-800 px-4 py-3 focus-within:border-cyan-500 transition-colors group">
                                <Lock className="w-4 h-4 text-zinc-600 group-focus-within:text-cyan-500 transition-colors mr-3" />
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-transparent outline-none flex-1 text-sm text-white placeholder-zinc-600"
                                />

                            </div>
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                    </div>

                    <button type="submit" className="btn bg-arenaOrange hover:bg-opacity-90 border-none text-white w-full font-sports text-xl uppercase tracking-wider mt-4">
                        Login
                    </button>
                </form>

                <p className="text-center font-body text-sm text-white/60 mt-6">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-arenaOrange hover:underline font-semibold">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;