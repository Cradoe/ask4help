"use client";

import { Button } from "components/button";
import { useState } from "react";
import { StudentTab } from "./student-tab";
import { AdvisorTab } from "./advisor-tab";

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<string>("student");

  return (
    <section className="mt-10 lg:mt-20 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl">
      <div className="flex justify-center flex-col items-center gap-6 font-medium">
        <div className="bg-secondary-50 px-8 rounded-full py-2 text-xs md:text-sm uppercase">
          How Ask4hep works
        </div>

        <div className="text-xs md:text-sm bg-primary-50 p-2 rounded-full flex gap-5 justify-between items-center">
          <Button
            radius="rounded-full"
            className="lg:w-36 border-none hover:bg-primary-600/50"
            variant={activeTab === "student" ? "primary" : "transparent"}
            onClick={() => setActiveTab("student")}
          >
            Student
          </Button>
          <Button
            radius="rounded-full"
            className="lg:w-48 border-none hover:bg-primary-600/50"
            variant={activeTab === "advisor" ? "primary" : "transparent"}
            onClick={() => setActiveTab("advisor")}
          >
            Study Advisor
          </Button>
        </div>
      </div>
      <div className="">{activeTab === "student" && <StudentTab />}</div>
      <div className="">{activeTab === "advisor" && <AdvisorTab />}</div>
    </section>
  );
};
