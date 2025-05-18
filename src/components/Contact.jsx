const Contact = () => {
  return (
    <section className="bg-[#f6f3f2] py-20 px-10 lg:px-40">
      <h2 className="text-3xl font-light text-center text-gray-800 mb-12 uppercase tracking-widest">
        Contact
      </h2>
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-32"
          ></textarea>
        </div>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
