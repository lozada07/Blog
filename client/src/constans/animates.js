export const fadeIn = (direction, x, y) => {
  let hidden;
  if (direction === "down") {
    hidden = { opacity: 0, y: -y }; // Aplica un valor diferente si la dirección es 'down'
  } else if (direction === "up") {
    hidden = { opacity: 0, y: y }; // Aplica un valor diferente si la dirección es 'up'
  } else if (direction === "right") {
    hidden = { opacity: 0, x: -x }; // Valor por defectos
  } else if (direction === "letf") {
    hidden = { opacity: 0, x: x }; // Valor por defecto
  } else if (direction === "open") {
    hidden = { opacity: 0, scale: 0.8 }; // Valor por defecto
  }

  return {
    show: { opacity: 1, y: 0, x: 0, scale: 1 },
    hidden,
  };
};
