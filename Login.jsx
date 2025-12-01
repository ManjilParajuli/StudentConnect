import React, { useState } from "react";
import "../src/index.css";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import "./App.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-sm bg-black/20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/10">
     
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full border-4 border-cyan-400 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center">
          Student Connect
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Connect and thrive in your academic journey.
        </p>

        <label className="text-gray-300 text-sm font-semibold">
          Email Address
        </label>
        <div className="relative mt-1 mb-5">
          <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <label className="text-gray-300 text-sm font-semibold">Password</label>
        <div className="relative mt-1 mb-3">
          <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="•••••••••••"
            className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-10 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" className="accent-cyan-400" />
            Remember me
          </label>

          <button className="text-cyan-400 hover:underline">
            Forgot Password?
          </button>
        </div>

        <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl text-white font-semibold text-lg transition">
          Login
        </button>

        <p className="text-center text-gray-300 mt-6 text-sm">
          Don’t have an account?{" "}
          <span className="text-yellow-400 font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
