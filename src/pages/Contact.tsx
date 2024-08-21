import ContactCard from "../components/ContactCard";
import EmailCard from "../components/EmailCard";

export default function Contact() {
  return (
    <div className="justify-center md:h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#b34f5d] to-[#f6e9eb] p-4 md:p-10">
      <div className="flex flex-col justify-center pl-4 md:pl-20">
        <p className="text-3xl md:text-6xl text-white font-bold">Let's chat.</p>
        <p className="text-2xl md:text-5xl text-white font-bold">
          Tell me about your project.
        </p>
        <p className="text-base md:text-lg font-thin pt-2 pb-6 md:pb-8">
          Let's create something together.
        </p>
        <EmailCard />
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <ContactCard />
      </div>
    </div>
  );
}
