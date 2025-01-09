import "../styles/hero.css";

const Hero = ({
    title = "",
    subtitle = "",
    image = "",
    height = 250,
}) => {
  const hasImage = image != "";

  return (
    <div id="hero" style={{ height: height }}>
        <div id="heroTitles">
          <h1 id="heroText" className={hasImage ? "background" : ""} style={{ visibility: title == "" ? "hidden" : "visible" }}>{title}</h1>
          <h1 id="heroSubtext" className={hasImage ? "background" : ""} style={{ visibility: subtitle == "" ? "hidden" : "visible" }}>{subtitle}</h1>
        </div>
        <div id="heroBackground">
          <img src={image} style={{ visibility: hasImage ? "visible" : "hidden" }} />
        </div>
    </div>
  )
}

export default Hero;
