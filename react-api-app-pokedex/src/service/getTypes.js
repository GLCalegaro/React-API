import poison from "../Images/Types/poison.png";
import bug from "../Images/Types/bug.png";
import water from "../Images/Types/water.png";
import flying from "../Images/Types/flying.png";
import fire from "../Images/Types/fire.png";
import normal from "../Images/Types/normal.png";
import grass from "../Images/Types/grass.png";

export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "grass":
        return grass;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "water":
        return water;
      default:
        return fire;
    }
  };
 