// Edit this file to change your name, links and the card on the home page.

export interface Developer {
  name: string;
  location: string;
  role: string;
  stack: string[];
  learning: string[];
  openTo: string;
}

export const site = {
  name: "Shahriar Al Shihab",
  title: "Shihab · Web developer",
  description:
    "Portfolio and blog of Shihab, a full-stack web developer from Bangladesh.",
  links: {
    github: "https://github.com/ShahriarALshihab",
    linkedin: "www.linkedin.com/in/shahriar-al-shihab",
    email: "shahriar.al.shihab@gmail.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
};

export const me: Developer = {
  name: "Shahriar Al Shihab",
  location: "Bangladesh",
  role: "Full-stack web developer",
  stack: ["TypeScript", "React", "Next.js", "MongoDB", "SQL", "Astro"],
  learning: ["PostgreSQL", "TypeORM", "Drizzle", "Redis"],
  openTo: "Internships and junior roles",
};
