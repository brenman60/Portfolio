const PageDivider = ({
  height = "200px",
  width = "100%",
  color = "white",
  opacity = "1",
}) => {
  return (
    <div
      className={"pageDivider"}
      style={{
        height: `${height}`,
        width: `${width}`,
        backgroundColor: `${color}`,
        opacity: `${opacity}`,
        margin: "auto"
      }}
    />
  );
};


export default PageDivider;
