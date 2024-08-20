interface StackCardProps {
  stack: string[];
}

export default function StackCard(props: StackCardProps) {
  const {stack} = props; 
    return (
      <div className="container flex flex-col">
        <div className="text-3xl font-bold mb-16 uppercase border-b w-fit text-white">
          technologies used
        </div>
        <div className="flex flex-wrap gap-7">
          {stack.map((e, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-24 h-24 relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-20 after:h-20 after:rounded-full after:bg-gradient-to-r from-violet-200 to-pink-200
              before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-28 before:h-28 before:rounded-full before:border-8 uppercase font-semibold text-sm text-blood hover:scale-105"
            >
              <span className="z-10">{e}</span>
            </div>
          ))}
        </div>
      </div>
    );
}
