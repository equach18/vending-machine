import chipPic from "./chip.png";

function Chip({xPos, yPos}) {
  const chipStyle = {
    position: "absolute",
    top: `${yPos}px`,
    left: `${xPos}px`,
  };

  return <img src={chipPic} className="Chip" alt= "A bad of chips" style={chipStyle} />;
}

export default Chip;
