"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowLeft,
  ScanFace,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    let valid = true;

    if (!email.trim()) {
      newErrors.email = "Gmail is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid Gmail";
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleLogin = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      router.push("/admin");
    }, 800);
  };

  return (
    <main
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10
        bg-slate-50
      "
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      {/* Back to Home */}
      <button
        type="button"
        onClick={() => router.push("/")}
        className="
          absolute
          top-6
          left-6
          z-20
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-gray-500
          transition-colors
          hover:text-indigo-600
        "
      >
        <ArrowLeft size={17} />
        Back to Home
      </button>

      {/* Login Card */}
      <Card
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-xl
          border
          border-gray-200
          bg-white
          shadow-lg
        "
      >
        <CardContent className="p-8 sm:p-9">

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-indigo-600
                text-white
                shadow-sm
              "
            >
              <ScanFace size={25} />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Admin Login
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Sign in to your administrator account
            </p>
          </div>

          <div className="space-y-6">

            {/* Email */}
            <div>
              <Label className="mb-2 block text-gray-700">
                Gmail
              </Label>

              <div className="relative">
                <Mail
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                  size={19}
                />

                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (errors.email) {
                      setErrors((prev) => ({
                        ...prev,
                        email: "",
                      }));
                    }
                  }}
                  className="
                    pl-10
                    h-12
                    rounded-lg
                    border-gray-300
                    bg-white
                    text-gray-900
                    transition-all
                    duration-200
                    placeholder:text-gray-400
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500/20
                    hover:border-gray-400
                  "
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label className="mb-2 block text-gray-700">
                Password
              </Label>

              <div className="relative">
                <Lock
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                  size={19}
                />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);

                    if (errors.password) {
                      setErrors((prev) => ({
                        ...prev,
                        password: "",
                      }));
                    }
                  }}
                  className="
                    pl-10
                    pr-10
                    h-12
                    rounded-lg
                    border-gray-300
                    bg-white
                    text-gray-900
                    transition-all
                    duration-200
                    placeholder:text-gray-400
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-500/20
                    hover:border-gray-400
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    transition-colors
                    hover:text-indigo-600
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              disabled={loading}
              className="
                w-full
                h-12
                rounded-lg
                bg-indigo-600
                text-white
                font-semibold
                text-base
                shadow-sm
                transition-all
                duration-200
                hover:bg-indigo-700
                hover:shadow-md
                active:scale-[0.98]
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />

                    <path
                      className="opacity-90"
                      fill="currentColor"
                      d="M22 12a10 10 0 00-10-10v4a6 6 0 016 6h4z"
                    />
                  </svg>

                  Signing In...
                </span>
              ) : (
                "Admin Login"
              )}
            </Button>

          </div>

          {/* Footer */}
          <p className="mt-7 text-center text-xs text-gray-400">
            Smart Attendance System
          </p>

        </CardContent>
      </Card>
    </main>
  );
}