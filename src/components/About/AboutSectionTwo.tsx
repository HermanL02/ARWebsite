import Image from "next/image";

const AboutSectionTwo = () => {
  const teamMembers = [
    {
      name: "Herman Liang",
      role: "Founder & Software Developer",
      description: "Leading our technical vision with over 8 years of experience in full-stack development. Herman specializes in enterprise architecture, cloud solutions, and scalable web applications.",
      image: "/images/about/yiqunLiang.png"
    },
    {
      name: "Hengbo Huang",
      role: "Co-Founder & Full Stack Developer",
      description: "Expert in modern web technologies and automation solutions. Hengbo focuses on creating efficient, user-friendly applications that solve real business challenges.",
      image: "/images/about/hengboHuang.jpg"
    },
    {
      name: "Zhida Liang",
      role: "Co-Founder",
      description: "Driving operational excellence and business strategy. Zhida brings extensive experience in business process optimization and client relationship management.",
      image: "/images/testimonials/author-02.png"
    },

  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Meet Our Team
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark">
            Our founders bring together decades of combined experience in software development and business operations
          </p>
        </div>
        
        <div className="-mx-4 flex flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 text-center">
                <div className="relative mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
