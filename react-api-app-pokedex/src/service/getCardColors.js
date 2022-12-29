export const getCardColors = (type) => {
    switch(type) {
      case "Bug":
        return "#76A866";
      case "Fire":
        return "#EAAB7D";
      case "Flying":
        return "#6892B0";
      case "Grass":
        return "#729F92";
      case "Normal":
        return "#BF9762";
      case "Poison":
        return "#729F92";
      case "Water":
        return "#71C3FF";
      default:
        return "#8A8A8A";
    }
  };
