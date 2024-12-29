import Hero from "../components/Hero";

const NotFound = () => {
  document.title = "404 Not Found";
  return (
    <div>
      <Hero title="404 Not Found" />
    </div>
  );
};

export default NotFound;
