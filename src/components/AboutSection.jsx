const AboutSection = () => {
  return (
    <div className="relative mt-20 w-full flex-col py-4 mx-auto justify-center flex items-center">
      <h1 className="text-6xl text-zinc-900 font-bold mb-8 font-['sans'] text-center">
        Our Story
      </h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-[70rem] px-4 py-8">
        <div className="h-full w-full">
          <img
            className="h-[20rem] transition-all duration-400 hover:scale-105 rounded-xl"
            src="https://images.unsplash.com/photo-1587241321921-91a834d6d191?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Image"
          />
        </div>
        <div className="flex bg-amber-100 p-10 rounded-4xl justify-center items-center flex-col gap-10 w-full">
          <div className="text-xl font-[sans] font-bold text-center">
            The Sweet Space is a dessert brand that offers a wide range of
            customizable desserts. Our restaurant provides a variety of
            delicious desserts with a selection of toppings and decorations,
            allowing customers to create their own personalized desserts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
