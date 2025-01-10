import "../styles/link.css";

const Link = ({
    linkType,
    link,
}) => {
  return (
    <div className="link">
      {linkType}
      {link}
    </div>
  )
}

export default Link
