import { Info, AlertTriangle, XCircle } from "lucide-react";
import { ReactNode } from "react";

type CalloutProps = {
  type?: "info" | "warning" | "danger";
  children: ReactNode;
};

export default function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: "bg-[#5e96d8]/10 border-[#5e96d8] text-neutral-200",
    warning: "bg-amber-500/10 border-amber-500 text-neutral-200",
    danger: "bg-red-500/10 border-red-500 text-neutral-200",
  };

  const icons = {
    info: <Info className="article-accent mt-0.5 h-5 w-5" />,
    warning: <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-400" />,
    danger: <XCircle className="mt-0.5 h-5 w-5 text-red-500" />,
  };

  return (
    <div
      className={`my-6 flex gap-3 rounded-r-md border-l-4 p-4 ${styles[type]}`}
    >
      <div className="shrink-0">{icons[type]}</div>
      <div className="prose-p:m-0 text-sm md:text-base">{children}</div>
    </div>
  );
}

