interface ProjectType {
  title: string;
  url?: string;
  link?: string
  children?: React.ReactNode;
}

export default function ProjectCard(props: ProjectType) {
  const { title, children } = props;

  return (
    <div>
      <div className="hover:scale-105 hover:shadow-xl container border rounded w-96 flex flex-col items-center text-justify   m-4 p-4">
        <div className="flex items-end uppercase justify-between text-white text-2xl rounded-lg p-3 font-bold w-full h-44 bg-gradient-to-r from-[#200122] to-[#6f0000] mb-4">
          {title}
          <i className="fa fa-external-link-square hover:cursor-pointer "></i>
        </div>{" "}
        {/* Full width and margin for spacing */}
        <div className="font-thin">{children}</div>
      </div>
    </div>
  );
}
