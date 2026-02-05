import './IconText.css'

function IconText({ icon, text }) {
  return (
    <div className="ma-icon-text">
      <img className="ma-icon" src={icon} alt="icon" />
      <p className="ma-text">{text}</p>
    </div>
  );
}

export default IconText;
