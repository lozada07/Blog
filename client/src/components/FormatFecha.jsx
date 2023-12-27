import { formatDistanceToNow, parseISO } from "date-fns";
import { enUS, es } from "date-fns/locale";

const FormatFecha = ({ fechaISO }) => {
  const fecha = parseISO(fechaISO);
  return formatDistanceToNow(fecha, { addSuffix: true, locale: enUS });
};

export default FormatFecha;
