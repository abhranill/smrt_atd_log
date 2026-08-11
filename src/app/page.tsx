"use client";

import { useRouter } from "next/navigation";
import {
  GraduationCap,
  UserRound,
  ShieldCheck,
  ArrowRight,
  ScanFace,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const loginOptions = [
    {
      title: "Student",
      description:
        "Access your attendance records, profile, and academic information.",
      icon: GraduationCap,
      route: "/student/login",
    },
    {
      title: "Teacher",
      description:
        "Manage classes, mark attendance, and monitor student records.",
      icon: UserRound,
      route: "/teacher/login",
    },
    {
      title: "Administrator",
      description:
        "Manage users, system settings, and overall attendance data.",
      icon: ShieldCheck,
      route: "/admin/login",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">

          {/* Logo */}
          <div className="mx-auto mb-5 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
            <ScanFace size={26} className="text-white" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Smart Attendance System
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Face Recognition-based Attendance Management
          </p>

          <p className="text-sm font-medium text-gray-700 mt-6">
            Select your account type to continue
          </p>
        </div>

        {/* Login Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {loginOptions.map((option) => {
            const Icon = option.icon;

            return (
              <button
                key={option.title}
                type="button"
                onClick={() => router.push(option.route)}
                className="
                  group
                  text-left
                  bg-white
                  rounded-xl
                  border
                  border-gray-200
                  p-6
                  transition-all
                  duration-200
                  hover:border-indigo-200
                  hover:shadow-md
                  hover:-translate-y-1
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500/30
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-11
                    h-11
                    rounded-lg
                    bg-indigo-50
                    flex
                    items-center
                    justify-center
                    text-indigo-600
                    transition-colors
                    duration-200
                    group-hover:bg-indigo-100
                  "
                >
                  <Icon size={23} />
                </div>

                {/* Title */}
                <h2 className="mt-5 text-lg font-semibold text-gray-900">
                  {option.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {option.description}
                </p>

                {/* Continue */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-indigo-600
                    transition-all
                    duration-200
                    group-hover:gap-3
                    group-hover:text-indigo-700
                  "
                >
                  Continue
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </button>
            );
          })}

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Secure attendance management system
          </p>
        </div>

      </div>
    </main>
  );
}