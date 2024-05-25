"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next JS</li>
        <li>Python</li>
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>React JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>UNEC</li>
        <li>JED Academy</li>
        <li>DIV Academy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Jed Academy Course Sertificated</li>
        <li>Jed Academy Experience Sertificated</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white " id="about">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
        py-8 px-4"
      >
        <Image alt="image" width={500} height={500} src={"/2.png"} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            I m Front-End Developer - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vel consequuntur ducimus quod praesentium autem
            accusantium fugiat porro eveniet libero corporis!
          </p>

          <div className="flex flex-row justify-start mt-8">
            
            <Tabbutton 
                selectTab={() => handleChange("skills")}
                active={tab === "skills"}
            >Skills
            </Tabbutton>

            <Tabbutton 
                selectTab={() => handleChange("education")}
                active={tab === "education"}
            >Education
            </Tabbutton>

            <Tabbutton 
                selectTab={() => handleChange("certifications")}
                active={tab === "certifications"}
            >Certifications
            </Tabbutton>

          </div>

          <div className="mt-8">
            {
              TAB_DATA.find((t) => t.id === tab)?.content
            }
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;