interface ProjectType {
  title: string;
  url?: string;
  link?: string;
  children?: React.ReactNode;
}

export default function ProjectCard(props: ProjectType) {
  const { title, children, link, url } = props;

  return (
    <div className="m-2 p-2 md:m-4 md:p-4">
      <div className="hover:scale-105 hover:shadow-2xl border border-gray-300 rounded-lg w-full md:w-96 flex flex-col items-center text-justify bg-white overflow-hidden">
        <div className="relative w-full h-36 md:h-44">
          <img
            src={url}
            alt="bg image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-between p-3 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-xl md:text-2xl text-white font-bold">
              {title}
            </h3>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fa fa-external-link-square hover:cursor-pointer"></i>
              </a>
            )}
          </div>
        </div>
        <div className="p-4 text-gray-700 font-thin">{children}</div>
      </div>
    </div>
  );
}
