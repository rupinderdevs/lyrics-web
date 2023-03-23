

const Hero = ({ }) => {
  return (
    <section className="mb-36">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            'url("https://mdbootstrap.com/img/new/textures/full/142.jpg")',
          height: 500
        }}
      />
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div
            className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
            style={{
              marginTop: "-170px",
              background: "hsla(0, 0%, 100%, 0.2)",
              backdropFilter: "blur(30px)"
            }}
          >
            <h1 className="capitalize text-xl md:text-6xl font-bold mb-6 text-white">
             Best <span className="text-[#c02026]">songs lyrics </span>Platform  <br />           
            </h1>
            <p className="text-xl text-white">song lyrics website that provides access to the lyrics of various songs</p>
              <p  className="text-xl text-white">We have a large, legal, every day growing universe of lyrics where stars of all genres and ages shine.</p>
            </div>
          </div>
        </div>
    </section>


  );
};

export default Hero;