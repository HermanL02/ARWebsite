import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Future of Enterprise Automation in 2024",
    paragraph:
      "Discover how AI and machine learning are revolutionizing business process automation, and what this means for enterprise efficiency and cost reduction.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Herman Liang",
      image: "/images/blog/author-01.png",
      designation: "Founder & Software Developer",
    },
    tags: ["automation"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Building Scalable Enterprise Websites: Best Practices",
    paragraph:
      "Learn the essential strategies and technologies for creating enterprise websites that can handle high traffic and complex business requirements.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Hengbo Huang",
      image: "/images/blog/author-02.png",
      designation: "Co-Founder & Full Stack Developer",
    },
    tags: ["development"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "API Integration Strategies for Modern Businesses",
    paragraph:
      "Explore effective approaches to API development and integration that can streamline your business operations and improve system connectivity.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Zhida Liang",
      image: "/zhidaLiang.jpg",
      designation: "Co-Founder & COO",
    },
    tags: ["technology"],
    publishDate: "2024",
  },
];
export default blogData;
