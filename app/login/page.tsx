"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async () => {
        try {
            setLoading(true);
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            router.push("/admin");

        } catch (error: any) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center opacity-20" />

            <div className="relative z-10 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-full max-w-md shadow-2xl">

                <h1 className="text-4xl font-black text-white mb-3">
                    Admin Login
                </h1>

                <p className="text-gray-400 mb-8">
                    Secure company dashboard access.
                </p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-4 rounded-2xl bg-zinc-800 text-white outline-none border border-white/10 focus:border-yellow-400"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-6 p-4 rounded-2xl bg-zinc-800 text-white outline-none border border-white/10 focus:border-yellow-400"
                />

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-yellow-400 text-black p-4 rounded-2xl font-black hover:scale-[1.02] transition duration-300"
                >
                    {loading ? "Logging In..." : "Login To Dashboard"}
                </button>
            </div>
        </div>
    );
}
