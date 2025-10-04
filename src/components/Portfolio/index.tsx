import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Koii Network",
      category: "Web3 Platform",
      description: "Decentralized infrastructure platform for building and running distributed applications.",
      image: "/images/portfolio/koii-network.png",
      url: "https://koii.network",
    },
    {
      id: 2,
      title: "StaySuitely",
      category: "Hospitality",
      description: "Modern accommodation booking and management platform for suite rentals.",
      image: "/images/portfolio/staysuitely.png",
      url: "https://staysuitely.com",
    },
    {
      id: 3,
      title: "JLPJZ",
      category: "Business Website",
      description: "Professional business website with modern design and functionality.",
      image: "/images/portfolio/jlpjz.png",
      url: "http://jlpjz.com",
    },
  ];

  return (
    <section className="bg-white py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Recent Work
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            See how we&apos;ve helped small businesses in Halifax grow their online presence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-dark"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={project.id === 1}
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {project.category}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
            Ready to grow your business online?
          </p>
          <Link
            href="https://calendly.com/hermanyiqunliang/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
