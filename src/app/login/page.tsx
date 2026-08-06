"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, UserRound,  ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "",
  });

  const validate = () => {
    const newErrors = {
      email: "",
      password: "",
      role: "",
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

    if (!role) {
      newErrors.role = "Please select a role";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleLogin = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      switch (role) {
        case "student":
          router.push("/student");
          break;

        case "teacher":
          router.push("/teacher");
          break;

        case "admin":
          router.push("/admin");
          break;
      }
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
    bg-gradient-to-br
    from-slate-100
    via-slate-50
    to-slate-200
    overflow-hidden
  "
>
  {/* Background Decoration */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-slate-300/20 blur-3xl" />

    <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl" />
  </div>
     <Card
  className="
    relative
    z-10
    w-full
    max-w-md
    rounded-3xl
    border
    border-slate-200
    bg-white
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-2xl
  "
>
        <CardContent className="p-8">

          <div className="text-center mb-8">
<h1 className="text-3xl font-bold tracking-tight text-slate-900">
  Smart Attendance System
</h1>
            <p className="text-slate-500 mt-2">
              Sign in to continue
            </p>
          </div>

          <div className="space-y-6">

            {/* Email */}

            <div>

              <Label className="mb-2 block">
                Gmail
              </Label>

              <div className="relative">

                <Mail
                 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  size={20}
                />

               <Input
  type="email"
  placeholder="example@gmail.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="
    pl-10
    h-12
    rounded-xl
    border-slate-300
    bg-slate-50
    transition-all
    duration-300
    focus:border-slate-700
    focus:ring-2
    focus:ring-slate-300
    hover:border-slate-400
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

              <Label className="mb-2 block">
                Password
              </Label>

              <div className="relative">

                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  size={20}
                />

               <Input
  type={showPassword ? "text" : "password"}
  placeholder="Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="
    pl-10
    pr-10
    h-12
    rounded-xl
    border-slate-300
    bg-slate-50
    transition-all
    duration-300
    focus:border-slate-700
    focus:ring-2
    focus:ring-slate-300
    hover:border-slate-400
  "
/>

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                 className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password}
                </p>
              )}

            </div>

            {/* Role */}

           <div>
  <Label className="mb-2 block">
    Login As
  </Label>

  <div className="relative">

    <UserRound
      size={20}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
    />

<select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="
    w-full
    h-12
    rounded-xl
    border
    border-slate-300
    bg-slate-50
    pl-10
    pr-4
    text-slate-700
    transition-all
    duration-300
    hover:border-slate-400
    focus:border-slate-700
    focus:ring-2
    focus:ring-slate-300
    outline-none
    cursor-pointer
    appearance-none
  "
>
  <option value="">Select Role</option>
  <option value="student">Student</option>
  <option value="teacher">Teacher</option>
  <option value="admin">Administrator</option>
</select>
<ChevronDown
  size={18}
  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
/>
  </div>

  {errors.role && (
    <p className="mt-2 text-sm text-red-500">
      {errors.role}
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
rounded-xl
bg-linear-to-r
from-slate-700
via-slate-800
to-slate-900
text-white
font-semibold
text-base
shadow-lg
shadow-slate-900/20
transition-all
duration-300
hover:scale-[1.02]
hover:shadow-xl
hover:shadow-slate-900/30
hover:from-slate-800
hover:via-slate-900
hover:to-black
active:scale-95
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
          className="opacity-20"
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
    "Login"
  )}
</Button>

          </div>

        </CardContent>
      </Card>
    </main>
  );
}