import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const links = [
  // { title: "YouTube", href: "#" },
  { title: "GitHub", href: "https://github.com/gabriel-samo" },
  // { title: "Instagram", href: "#" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-samoylov-7262aa22a/"
  }
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved Gabriel
            Samoylov.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-all duration-300"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
