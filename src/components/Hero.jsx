const HeroFormats = {
  SText: "stext",
  FElements: "felements",
  SElements: "selements",
};

const Hero = ({
    title = "",
    image = "",
    format = HeroFormats.SText,
    elements = {},
}) => {
  let titleStyle = title == "" ? "visibility: none" : "visibility: visible";

  return (
    <div id={"hero"}>
        <h1 style={{titleStyle}}>{title}</h1>
        <div className={"heroBackground"}>
          <img src={image} style={{ visibility: image == "" ? "hidden" : "visible" }} />
        </div>
    </div>
  )
}

export default Hero;
