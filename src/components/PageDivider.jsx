import { colorScheme } from "../App";

const PageDivider = ({
  height = "200px",
  width = "100%",
  opacity = "1",
  topMargin = 0,
  bottomMargin = 50,
}) => {
  return (
    <div
      className={"pageDivider"}
      style={{
        height: `${height}`,
        width: `${width}`,
        backgroundColor: `${colorScheme.background2}`,
        opacity: `${opacity}`,
        margin: "auto",
        marginTop: `${topMargin}px`,
        marginBottom: `${bottomMargin}px`,
        borderRadius: "25px",
      }}
    />
  );
};


export default PageDivider;
