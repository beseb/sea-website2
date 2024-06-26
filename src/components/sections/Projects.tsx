import projects from '../../../public/data/projects.json';
import Image from 'next/image';
import '../../styles/custom.css';

type Project = {
  image: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
  link: string;
};
export function Projects() {
  return (
    <div className="projects_section w-full h-fit flex flex-col items-start justify-start px-6 md:px-20 mt-10 md:mt-20">
      <div className="Projects_section_content_1  w-full flex flex-col items-start justify-center">
        <h2 className="Projects_section_title text-2xl md:text-3xl  font-montserrat font-thin italic text-blue-800">
          Ce que nous crééons
        </h2>
        <h3 className=" Projects_section_slogan text-4xl sm:text-6xl md:text-7xl md:w-full text-white flex gap-4">
          Nos <span className="font-pinkerston">Projets</span>
        </h3>
      </div>
      <div className="Projects_section_item_container flex flex-col items-start justify-end w-full overflow-visible mt-6 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="Projects_section_item group flex flex-col  lg:block border  border-t-1 border-b-0 last:border-b-1  border-x-0 border-opacity-30 w-full py-4 lg:opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out "
          >
            <a
              className="Project_item_link h-full"
              href={project.link}
              aria-label={`Lien vers le projet ${project.title}`}
            >
              <div className="Projects_section_item_content w-full flex flex-col items-center justify-center  xl:flex-row  ">
                <div className="Projects_section_item_content_image order-1 w-3/4">
                  <Image
                    className=" w-full rounded-xl xl:opacity-50 xl:group-hover:opacity-100 group-hover:scale-105  transition-all duration-300 ease-in-out"
                    src={project.image}
                    alt={`image du projet de ${project.title} `}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="Project_section_item_content_text w-full h-full order-2 xl:order-none ">
                  <h4 className="Projects_section_item_title text-wrap mt-6 text-6xl md:text-7xl  lg:text-9xl w-full h-full font-pinkerston group-hover:translate-y-[-15px] group-hover:text-white transition-all ease duration-200">
                    {project.title}
                  </h4>
                  <h5 className="Projects_section_item_type text-xl md:text-3xl mt-2 mb-2 font-semibold group-hover:text-white transition-all ease duration-200">
                    {project.type}
                  </h5>
                  <div className="Projects_section_item_tags italic flex flex-wrap gap-1 md:gap-2 ">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="Projects_section_item_tag font-lg text-white border border-transparent shadow-xl bg-transparent  w-fit rounded-full p-2 px-4"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
