const PageDivider = ({
    height = 200,
    color = "white",
}) => {
  return (
    <div className={"pageDivider"} style={{height: height, backgroundColor: color}} />
  )
}

export default PageDivider;
