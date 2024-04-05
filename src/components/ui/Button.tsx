
"use-client"

const getVariantClasses = (variant: "primary" | "secondary") => {
  switch (variant) {
    case "primary":
      return "bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    case "secondary":
      return "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded";
    default:
      return "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
  }
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${getVariantClasses(variant)} ${className}`} {...props}>
      {children}
    </button>
  );
}
