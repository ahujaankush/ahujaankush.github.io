"use client"

import Section from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Heading1, Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const projects = [{
  title: "Kayf.app",
  description: "The ultimate tool for information centralization and process automation. Our productivity suite enables efficient note-taking and automation with powerful collaboration and workflow software. Plus, effortlessly search existing communication channels using our advanced semantic search engine, Tracer.",
  tags: ["AI", "Productivity", "Automation"],
  link: "https://kayf.app",
},
{
  title: "Apeiron-lib",
  description: "Complete library for controlling the robots in Botball. Shift your focus from small implementation details to the actual strategy. The goal was to reduce the learning curve and essentially control the create & wombat using the same interface. Other than a small setup file nothing is else required.",
  tags: ["Robotics", "OpenCV", "Low-level"],
  link: "https://github.com/ApeironOrg/apeiron-lib",
},
{
  title: "TrackIt",
  description: "Log your calories, macros and workouts in one simple web-app with direct access to large food databases. Self-hosted.",
  tags: ["Nutrition", "Fitness", "Web"],
  link: "https://github.com/ahujaankush/TrackIt",
},
{
  title: "Aetherized Dotfiles",
  description: "My AwesomeWM desktop & nvim configuration.",
  tags: ["Linux", "Vim", "Lua"],
  link: "https://github.com/ahujaankush/AetherizedDots",
}
]

export default function Home() {
  return (
    <main className="flex flex-col grow items-center px-6 md:px-0 mt-20">
      <Section>
        <div className="flex flex-col md:space-y-6 lg:space-y-0">
          <Heading1 className="!text-[10vw]">
            <Typewriter
              words={['Hello!', 'Servus!', 'Bonjour!', 'Hola!']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={75}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </Heading1>
          <Heading2>
            I&apos;m Ankush Ahuja. I&apos;m interested in CS & AI.
          </Heading2>
        </div>
        <Paragraph>
          I&apos;ve always been curious about how things work. As a kid, I would take apart my toys just to see what was inside. That curiosity stuck with me and now drives how I learn. Instead of just focusing on one tool, I like to dig into the ideas and concepts behind it. This way of learning has made everything more interesting and keeps me excited about what I do.

          I love solving problems, especially when it comes to math and algorithms. <br />
          Right now, I&apos;m diving deep into AI while finishing up my HTL education at tgm.
        </Paragraph>
        <a href="/#projects">
          <Button className="mt-6">
            <DoubleArrowDownIcon className="mr-2" />
            Projects
          </Button>
        </a>
      </Section>
      <Separator />
      <Section>
        <Heading2 id="projects">Projects</Heading2>
        {
          projects.map((e, i) => (
            <div className="flex flex-col space-y-8" key={`selected-projects-${i}`}>
              <div className="flex mt-6">
                <div className="flex flex-col flex-row grow space-y-2">
                  <Heading3>
                    <Link href={e.link} target="_blank">
                      {e.title}
                    </Link>
                  </Heading3>
                  <Paragraph>
                    {e.description}
                  </Paragraph>
                  <div className="flex flex-row space-x-2">
                    {e.tags.map((f, j) => (
                      <div key={`project-${i}-tag-${j}`} className="p-1 bg-accent">
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {i < projects.length - 1 ? <Separator /> : null}
            </div>
          ))
        }
      </Section>
    </main>
  );
}
