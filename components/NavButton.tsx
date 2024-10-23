import { LucideIcon } from "lucide-react";

import { Button } from "./ui/button";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
  title?: string;
};

import React from "react";
import Link from "next/link";

export default function NavButton({ icon: Icon, label, href, title }: Props) {
  return (
    <div>
      <Button
        variant="ghost"
        size="default"
        aria-label={label}
        title={label}
        className="rounded-full"
        asChild
      >
        {href ? (
          <Link href={href}>
            <Icon />
            {title}
          </Link>
        ) : (
          <Icon />
        )}
      </Button>
    </div>
  );
}
