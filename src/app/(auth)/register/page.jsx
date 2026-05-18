'use client'
import Link from 'next/link';

const RegisterPage = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // Better Auth বা রেজিস্ট্রেশন লজিক এখানে বসবে
        console.log({ name, email, password });
    };

    return (
        <div className="min-h-[calc(100vh-68px)] flex items-center justify-center px-4 bg-arenaBg">
            <div className="w-full max-w-md bg-arenaCard p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-sports font-bold text-center uppercase tracking-wide mb-6">
                    Create <span className="text-arenaOrange">Account</span>
                </h2>

                <form onSubmit={handleRegister} className="space-y-4 font-body">
                    <div>
                        <label className="label label-text text-white/80">Full Name</label>
                        <input type="text" name="name" required className="input input-bordered w-full bg-arenaBg border-white/10 text-white focus:border-arenaOrange focus:outline-none" />
                    </div>

                    <div>
                        <label className="label label-text text-white/80">Email Address</label>
                        <input type="email" name="email" required className="input input-bordered w-full bg-arenaBg border-white/10 text-white focus:border-arenaOrange focus:outline-none" />
                    </div>

                    <div>
                        <label className="label label-text text-white/80">Password</label>
                        <input type="password" name="password" required className="input input-bordered w-full bg-arenaBg border-white/10 text-white focus:border-arenaOrange focus:outline-none" />
                    </div>

                    <button type="submit" className="btn bg-arenaOrange hover:bg-opacity-90 border-none text-white w-full font-sports text-xl uppercase tracking-wider mt-4">
                        Register
                    </button>
                </form>

                <p className="text-center font-body text-sm text-white/60 mt-6">
                    Already have an account?{' '}
                    <Link href="/login" className="text-arenaOrange hover:underline font-semibold">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;