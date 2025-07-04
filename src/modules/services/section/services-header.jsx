
const ServicesHeader = () => {
  return (
    <section className="mt-0.5 text-white mb-12 w-screen relative bg-stone900 h-fit">
      <img src="/images/service_header.png" alt="service_header" className="w-[50vw] relative max-h-[350px]  " />
      <div className="absolute top-0 gap-y-4 right-[250px] flex flex-col h-full justify-center max-lg:right-0 max-sm:gap-y-2">
        <p className="font-Poppins text-sm font-semibold text-white/80">YOUR HOTELIO 👋</p>
        <h1 className="text-5xl font-Playfair max-sm:text-xl max-sm:w-[250px] w-[450px]">Book Hotel Room and Lodge by Online</h1>
      </div>
    </section>
  );
};

export default ServicesHeader;
