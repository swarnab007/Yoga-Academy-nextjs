"use client";
import React, { ReactNode } from "react";
import courseData from "../data/courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  schedule: Array<{
    day: string;
    time: string;
  }>;
  instructor: string;
}

export function Featured() {
  return (
    <div className="py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Courses
        </h1>
        <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10 mx-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 p-4 m-4">
          {courseData.courses.map((course: Course) => (
            <div key={course.id}>
              <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-zinc-900 shadow-lg transform transition duration-300 hover:scale-105">
                <div className="bg-zinc-900 p-4 rounded-lg shadow-md mb-6">
                  <h2 className="text-teal-400 text-xl font-bold mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-400 mb-2">{course.description}</p>
                  <p className="text-gray-400 mb-2">Level: {course.level}</p>
                  <p className="text-gray-400 mb-2">
                    Duration: {course.duration}
                  </p>
                  <div className="mb-2">
                    <h3 className="font-bold text-gray-300">Schedule:</h3>
                    <ul className="list-disc ml-4 text-gray-400">
                      {course.schedule.map((session, index) => (
                        <li key={index}>
                          {session.day}: {session.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-400">
                    Instructor: {course.instructor}
                  </p>
                  <Link href="/courses">
                    <button className="bg-white px-4 py-2 text-black mt-8">
                      check more
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-white px-4 py-2 text-black mt-8">
            view All Courses
          </button>
        </div>
      </div>
    </div>
  );
}
