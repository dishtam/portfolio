import ContactCard from "../components/ContactCard";
import EmailCard from "../components/EmailCard";

export default function Contact() {
  return (
    <div className="h-screen grid grid-cols-2 bg-gradient-to-br from-[#b34f5d] to-[#f6e9eb]">
      <div className="flex flex-col justify-center pl-20">
        <p className="text-6xl text-white font-bold">Let's chat.</p>
        <p className="text-5xl text-white font-bold">Tell me about your project.</p>
        <p className="text-lg font-thin pt-2 pb-8">
          Lets create something together
        </p>
        <EmailCard />
      </div>
      <div className="flex justify-center items-center">
        <ContactCard />
      </div>
    </div>
  );
}
