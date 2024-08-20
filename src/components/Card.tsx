interface PropType {
  id: string;
  subheading?: string;
  children?: React.ReactNode;
  dir?: boolean;
}

export default function Card(props: PropType) {
  const { id, subheading, children,dir } = props;

  return (
    <div
      className={`box-border ${
        dir ? "items-end" : "items-start"
      } text-justify flex flex-col w-48 h-auto rounded-xl p-5 hover:shadow-xl hover:scale-105 hover:transition-all hover:duration-200`}
    >
      <p className="text-center text-[#a02334] content-center h-10 w-10 rounded-full bg-[#ecd3d6] font-semibold">
        {id}
      </p>
      {subheading && <p className="pt-4 pb-2">{subheading}</p>}
      {children && <p className="font-thin">{children}</p>}
    </div>
  );
}
