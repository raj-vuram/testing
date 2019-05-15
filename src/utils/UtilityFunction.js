

export const isEmpty = val => {
  switch (val) {
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case undefined:
    case typeof this === "undefined":
      return true;
    default:
      return false;
  }
};

export const isEmptyList = list => {
  if (list.length === 0) return true;
  else return false;
};

export const isEmptyObject = obj => {
  if (!isEmpty(obj)) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }
  else {
    return true;
  }
};
export const setEllipsizeText = (text, size) => {
  if (text.length <= size + 3) {
    return text;
  } else {
    var subText = text.substring(0, size).trim();
    return (subText.concat("..."));
  }
};

export const joinStyleClasses = classesArray => {
  return classesArray.join(" ");
};


