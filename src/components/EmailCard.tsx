export default function EmailCard() {
  return (
    <div className="flex w-fit bg-white rounded p-2 md:p-4 gap-2 md:gap-4 shadow-lg hover:scale-105">
      <div className="flex items-center justify-center bg-[#e3bdc2] rounded-lg p-2 md:p-4">
        <i className="fa fa-envelope text-blood"></i>
      </div>
      <div className="flex flex-col text-xs md:text-sm justify-center items-start pr-4 md:pr-12">
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
