import SectionTitle from "../Common/SectionTitle";
import SingleClient from "@/components/Clients/SingleClient";
import clientsData from "@/components/Clients/clientsData";

const Clients = () => {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Valued Clients"
            paragraph="We partner with industry leaders to deliver innovative automation solutions that drive efficiency and growth."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
            {clientsData.map((client) => (
              <SingleClient key={client.id} client={client} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Want to become our next success story?
            </h2>
            <p className="mb-8 text-body-color dark:text-body-color-dark">
              Contact us to learn how we can provide customized automation solutions for your business
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients; 