import Hero from "../components/Hero";

const HomePage = () => {
  document.title = "Home";
  return (
    <div>
      <Hero title="Home Page" />
    </div>
  );
};

export default HomePage;
