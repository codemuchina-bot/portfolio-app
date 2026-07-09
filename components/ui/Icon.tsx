import { icons, type LucideProps } from "lucide-react";

type IconProps = LucideProps & { name: string };

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name as keyof typeof icons] ?? icons.Circle;
  return <LucideIcon {...props} />;
}
