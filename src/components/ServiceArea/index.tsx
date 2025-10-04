const ServiceArea = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Proudly Serving Halifax & Nova Scotia
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            We&apos;re a local web development company helping small businesses across the region succeed online.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">3+</div>
            <p className="text-sm text-body-color dark:text-body-color-dark">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">5+</div>
            <p className="text-sm text-body-color dark:text-body-color-dark">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">50+</div>
            <p className="text-sm text-body-color dark:text-body-color-dark">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
            <p className="text-sm text-body-color dark:text-body-color-dark">Support Available</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-dark">
            <h3 className="mb-2 text-xl font-semibold text-primary">Halifax</h3>
            <p className="text-sm text-body-color dark:text-body-color-dark">Web Design & SEO</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-dark">
            <h3 className="mb-2 text-xl font-semibold text-primary">Dartmouth</h3>
            <p className="text-sm text-body-color dark:text-body-color-dark">Digital Marketing</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-dark">
            <h3 className="mb-2 text-xl font-semibold text-primary">Bedford</h3>
            <p className="text-sm text-body-color dark:text-body-color-dark">Website Development</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-dark">
            <h3 className="mb-2 text-xl font-semibold text-primary">Nova Scotia</h3>
            <p className="text-sm text-body-color dark:text-body-color-dark">All Services Available</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center dark:bg-primary/10">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
            Local Expertise, Global Standards
          </h3>
          <p className="mx-auto max-w-[700px] text-base text-body-color dark:text-body-color-dark">
            As a Halifax-based company, we understand the local market and can meet with you in person.
            We combine our knowledge of the Nova Scotia business landscape with cutting-edge web technologies
            to deliver solutions that work for your small business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
