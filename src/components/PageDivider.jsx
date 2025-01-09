import { colorScheme } from "../App";

const PageDivider = ({
  height = "200px",
  width = "100%",
  opacity = "1",
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
        marginBottom: "50px",
        borderRadius: "25px",
      }}
    />
  );
};


export default PageDivider;
