import { formatDistanceToNow, parseISO } from "date-fns";
import { es } from "date-fns/locale";

const FormatFecha = ({ fechaISO }) => {
  const fecha = parseISO(fechaISO);
  return formatDistanceToNow(fecha, { addSuffix: true, locale: es });
};

export default FormatFecha;
