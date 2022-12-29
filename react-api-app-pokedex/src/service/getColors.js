export const getColors = (type) => {
  switch(type) {
    case "bug":
      return "#316520";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "Electric":
      return "#F4D23B";
    case "Fairy":
      return "#EC8FE6";
    case "fighting":
      return "#CE4069";
    case "fire":
      return "#F44900";
    case "flying":
      return "#6892B0";
    case "Ghost":
      return "#5269AC";
    case "grass":
      return "#70B873";
    case "Ground":
      return "#D97745";
    case "Ice":
      return "#74CEC0";
    case "normal":
      return "#8A8A8A";
    case "poison":
      return "#AD61AE";
    case "Psychic":
      return "#F67176";
    case "Rock":
      return "#C7B78B";
    case "Steel":
      return "#BBBBBB";
    case "water":
      return "#33A4F5";
    default:
      return "#74CEC0";
  }
};
