import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import blogDemoWebsite from "@/assets/images/blog-dark-light.png";
import financeDemoWebsite from "@/assets/images/samo-finance-img.png";
import CheckIcon from "@/assets/icons/check-circle.svg";

import Image from "next/image";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-wolrd Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging websites."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="pt-8 px-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span className="">{project.company}</span>
                    <span className="">&bull;</span>
                    <span className="">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span className="">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" className="">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span className="">Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const portfolioProjects = [
  {
    company: "Samo-Blog",
    year: "2024",
    title: "Blog Demo Website",
    results: [
      { title: "React, TailwindCSS and Flowbite" },
      { title: "Express as the backend" },
      { title: "MongoDB as the database" }
    ],
    link: "https://samo-blog.onrender.com/",
    image: blogDemoWebsite
  },
  {
    company: "Samo-Finance",
    year: "2024",
    title: "Finance Demo Website",
    results: [
      { title: "NextJS, TailwindCSS and Shadcn UI" },
      { title: "Hono and Drizzle for the backend" },
      { title: "Neon as the database" }
    ],
    link: "https://finance.gabrielsamo.com/",
    image: financeDemoWebsite
  }
];
