export default function ContactCard() {
  return (
    <form action="https://formspree.io/f/mkgwqjav" method="post">
      <div className="flex flex-col w-54 h-fit md:w-96 p-4 md:p-8 pb-6 gap-2 mb-10 md:mb-0 bg-[#b34f5d] rounded-md">
        <div className="text-white font-bold text-2xl md:text-3xl p-1 mb-2">
          Send me a message
        </div>
        <input
          type="text"
          name="Username"
          placeholder="Full Name"
          className="bg-[#ecd3d6] placeholder:text-[#b34f5d] text-left w-full placeholder:text-start placeholder:text-xs m-1 md:p-2 p-1 rounded-sm"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          className="bg-[#ecd3d6] text-left w-full placeholder:text-[#b34f5d] placeholder:text-start placeholder:text-xs m-1 md:p-2 p-1 rounded-sm"
          required
        />
        <input
          type="text"
          name="Subject"
          placeholder="Subject"
          className="bg-[#ecd3d6] text-left placeholder:text-[#b34f5d] w-full placeholder:text-start placeholder:text-xs m-1 md:p-2 p-1 mb-3 rounded-sm"
          required
        />
        <label
          htmlFor="message"
          className="pb-2 font-thin text-xs text-white p-1"
        >
          Let's discuss about the work?
        </label>
        <textarea
          name="Message"
          placeholder="Type your message"
          id="message"
          className="bg-[#ecd3d6] placeholder:text-[#b34f5d] text-left h-24 md:h-36 w-full placeholder:text-start placeholder:text-xs m-1 md:p-2 p-1 rounded-sm"
          required
        />
        <input
          type="submit"
          value="Send Message"
          className="bg-white w-full font-semibold text-blood mt-2 md:mt-4 rounded md:p-2 p-1"
        />
      </div>
    </form>
  );
}
