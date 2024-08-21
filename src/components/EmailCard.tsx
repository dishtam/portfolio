export default function EmailCard() {
  return (
    <div className="flex w-fit bg-white rounded p-4 gap-4 shadow-lg hover:scale-105">
      <div className="flex items-center justify-center bg-[#e3bdc2] rounded-lg">
        <i className="fa fa-envelope p-2 text-blood"></i>
      </div>
      <div className="flex flex-col text-sm justify-center items-start pr-12">
        <div>Mail me at</div>
        <a
          href="mailto:rohhiiiit@gmail.com"
          className="text-blood hover:cursor-pointer"
        >
          rohhiiiit@gmail.com
        </a>
      </div>
    </div>
  );
}
