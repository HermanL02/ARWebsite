const AboutSectionTwo = () => {
  const teamMembers = [
    {
      name: "Herman Liang",
      role: "Software Developer",
      description: "Leading our technical vision with over 3 years of experience in full-stack development. Herman specializes in enterprise architecture, cloud solutions, and scalable web applications.",
    },
    {
      name: "Hengbo Huang",
      role: "Software Developer",
      description: "Expert in modern web technologies and automation solutions. Hengbo focuses on creating efficient, user-friendly applications that solve real business challenges.",
    },
    {
      name: "Lisa Ji",
      role: "Software Developer",
      description: "Master's degree student at University of Toronto, bringing cutting-edge academic knowledge and fresh perspectives to our development team.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Meet Our Engineers
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark">
            Our engineering team brings years of combined experience in software development
          </p>
        </div>

        <ul className="mx-auto max-w-3xl space-y-8">
          {teamMembers.map((member, index) => (
            <li key={index} className="border-b border-body-color/[.15] pb-8 last:border-b-0 dark:border-white/[.15]">
              <article>
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-base font-medium text-primary">
                  {member.role}
                </p>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {member.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
