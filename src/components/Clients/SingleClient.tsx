import Image from "next/image";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { name, description, service, benefit, details, image, demoWebsite } = client;
  
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark lg:px-8 xl:px-10">
          <div className="p-8">
            <div className="mb-6 flex items-center">
              <div className="relative mr-4 h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {name}
                </h3>
                <p className="text-sm text-primary">
                  {description}
                </p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Service Content
              </h4>
              <p className="text-body-color dark:text-body-color-dark">
                {service}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Achieved Results
              </h4>
              <p className="text-body-color dark:text-body-color-dark">
                {benefit}
              </p>
            </div>

            {demoWebsite && (
              <div className="mb-4">
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Website
                </h4>
                <a 
                  href={demoWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  {demoWebsite}
                </a>
              </div>
            )}

            <div>
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Project Details
              </h4>
              <p className="text-body-color dark:text-body-color-dark">
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClient; 