export default function DownloadResume() {
  return (
    <div className="flex justify-center">
      <span>
        <a href="/resume.pdf" download="Rohit_Resume.pdf" className="uppercase">
          <i className="fa fa-download px-2"></i>
          Resume
        </a>
      </span>
    </div>
  );
}
