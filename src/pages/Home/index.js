import publi from "../../assets/publi.png";

const Home = () => {
  return (
    <section className="h-auto flex flex-col justify-center">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">
        Fui atrás de amor voltei com pizza!
      </h1>

      <section className="w-2/5 mx-auto mt-9">
        <img src={publi} alt="Imagem Publicitária" />
      </section>
    </section>
  );
};

export default Home;
