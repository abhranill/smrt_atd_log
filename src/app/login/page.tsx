"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, UserRound } from "lucide-react";

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
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="p-8">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome Back
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
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
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
    />

    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="w-full h-10 rounded-md border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Role</option>
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
      <option value="admin">Admin</option>
    </select>

  </div>

  {errors.role && (
    <p className="mt-2 text-sm text-red-500">
      {errors.role}
    </p>
  )}
</div>

            {/* Login Button */}

            <Button
              className="w-full h-11"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Login"}
            </Button>

          </div>

        </CardContent>
      </Card>
    </main>
  );
}