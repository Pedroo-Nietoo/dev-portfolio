import { Info, AlertTriangle, XCircle } from "lucide-react";
import { ReactNode } from "react";

type CalloutProps = {
 type?: "info" | "warning" | "danger";
 children: ReactNode;
};

export default function Callout({ type = "info", children }: CalloutProps) {
 // Define as cores baseadas no tipo de alerta
 const styles = {
  info: "bg-blue-50 border-blue-500 text-blue-900",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
  danger: "bg-red-50 border-red-500 text-red-900",
 };

 // Define os ícones
 const icons = {
  info: <Info className="w-5 h-5 text-blue-500 mt-0.5" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />,
  danger: <XCircle className="w-5 h-5 text-red-500 mt-0.5" />,
 };

 return (
  <div className={`flex gap-3 p-4 my-6 border-l-4 rounded-r-md ${styles[type]}`}>
   <div className="shrink-0">{icons[type]}</div>
   {/* O prose-p:m-0 tira a margem padrão do parágrafo só aqui dentro para ficar alinhado */}
   <div className="prose-p:m-0 text-sm md:text-base">
    {children}
   </div>
  </div>
 );
}