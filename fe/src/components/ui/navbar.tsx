/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MenuIcon, X } from "lucide-react";

interface NavbarProps {
  children: React.ReactNode;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
}

export const Navbar = ({ children }: NavbarProps) => {
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  const height = useTransform(scrollY, [0, 100], ["6rem", "4rem"]);
  const padding = useTransform(scrollY, [0, 100], ["2rem", "1rem"]);
  const translateY = useTransform(scrollY, [0, 100], ["0px", "0px"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 8px 20px rgba(0, 0, 0, 0.3)"]
  );

  return (
    <motion.nav
      style={{
        backgroundColor,
        height,
        padding,
        translateY,
        boxShadow,
      }}
      className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm border-b border-white/10"
    >
      {children}
    </motion.nav>
  );
};

export const NavBody = ({ children }: NavbarProps) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.9]);
  
  return (
    <motion.div
      style={{ scale }}
      className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      {children}
    </motion.div>
  );
};

export const NavbarLogo = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1.2, 1]);
  
  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div
        style={{ scale }}
        whileHover={{ scale: 1.05 }}
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
      >
        MTasks
      </motion.div>
    </Link>
  );
};

export const NavItems = ({ items }: NavItemsProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item, idx) => (
        <Link
          key={`nav-item-${idx}`}
          href={item.link}
          className="text-neutral-300 hover:text-white transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-all duration-200";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-transparent border border-white text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children }: NavbarProps) => {
  return <div className="md:hidden">{children}</div>;
};

export const MobileNavHeader = ({ children }: NavbarProps) => {
  return (
    <div className="flex items-center justify-between p-4">{children}</div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-gray-300 transition-colors"
    >
      {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-black/90 backdrop-blur-lg"
    >
      <div className="px-4 py-6 space-y-4" onClick={onClose}>
        {children}
      </div>
    </motion.div>
  );
};