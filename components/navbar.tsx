"use client";

import { Truck, Menu, Recycle, Package, Handshake, Building, Briefcase, Scale } from "lucide-react";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/instagram";
import { PhoneCallIcon } from "@/components/ui/phone-call";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface LogoProps {
  url: string;
  src: string;
  alt: string;
  title: string;
  className?: string;
}

interface Navbar1Props {
  className?: string;
  logo?: LogoProps;
  menu?: MenuItem[];
}

// ─── Default values ───────────────────────────────────────────────────────────

const defaultLogo: LogoProps = {
  url: "/",
  src: "/logo-Photoroom.png",
  alt: "logo",
  title: "Think Green",
};

const defaultMenu: MenuItem[] = [
  { title: "Home", url: "/" },
  { title: "Chi Siamo", url: "/about" },
  {
    title: "Servizi",
    url: "about",
    items: [
      {
        title: "Trasporto",
        icon: <Truck className="size-5 shrink-0" />,
        url: "/services",
      },
      {
        title: "Stoccaggio",
        icon: <Package className="size-5 shrink-0" />,
        url: "/services",
      },
      {
        title: "Recupero e Smaltimento",
        icon: <Recycle className="size-5 shrink-0" />,
        url: "/services",
      },
      {
        title: "Impianto",
        icon: <Building className="size-5 shrink-0" />,
        url: "/services",
      },
      {
        title: "Consulenze",
        icon: <Briefcase className="size-5 shrink-0" />,
        url: "/services",
      },
      {
        title: "Conferimenti",
        icon: <Scale className="size-5 shrink-0" />,
        url: "/services",
      },
      {
        title: "Intermediazioni",
        icon: <Handshake className="size-5 shrink-0" />,
        url: "/",
      }
    ],
  },
  { title: "Contatti", url: "/contact" },
  { title: "Eventi", url: "#" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SubMenuLink: React.FC<{ item: MenuItem }> = ({ item }) => (
  <a
    className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-white/10 hover:text-emerald-400 text-white"
    href={item.url}
  >
    <div className="text-emerald-400">{item.icon}</div>
    <div>
      <div className="font-semibold text-white">{item.title}</div>
      {item.description && (
        <p className="text-sm leading-snug text-gray-400">
          {item.description}
        </p>
      )}
    </div>
  </a>
);

const renderMenuItem = (item: MenuItem): React.ReactElement => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="font-extrabold bg-transparent text-white hover:bg-white/10 hover:text-emerald-400 data-[state=open]:bg-white/10">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-black/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl p-2 shadow-2xl">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        className="group inline-flex h-10 w-max items-center justify-center bg-transparent px-4 py-2 transition-colors hover:bg-white/10 hover:text-emerald-400 font-extrabold text-white rounded-md"
        render={<a href={item.url} />}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem): React.ReactElement => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold text-white hover:no-underline hover:text-emerald-400">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 pl-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold text-white hover:text-emerald-400 transition-colors">
      {item.title}
    </a>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const Navbar1: React.FC<Navbar1Props> = ({
  logo = defaultLogo,
  menu = defaultMenu,
  className,
}) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest < 100) {
      setHidden(false);
      return;
    }

    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "py-4 px-4 bg-black/40 backdrop-blur-md border border-white/10 text-white fixed top-4 left-0 right-0 z-50 rounded-3xl lg:rounded-3xl mx-4 lg:mx-6 shadow-2xl",
        className
      )}
    >
      <div className="container px-4 mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          {/* Logo a sinistra */}
          <div className="flex items-center">
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src}
                width={150}
                height={150}
                className={cn("max-h-8 rounded p-0.5", logo.className)}
                style={{ width: "auto" }}
                alt={logo.alt}
              />
              <span className="text-2xl font-semibold tracking-tighter text-white">
                {logo.title}
              </span>
            </a>
          </div>

          {/* Menu al centro */}
          <div className="flex items-center flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contatti a destra */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:07731361942" 
              className="p-2 text-white hover:text-emerald-400 transition-colors"
              title="Chiama"
            >
              <PhoneCallIcon className="size-5" />
            </a>
            <a 
              href="https://instagram.com/tuoprofilo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-emerald-400 transition-colors"
              title="Seguici su Instagram"
            >
              <InstagramIcon className="size-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className={cn("max-h-8 rounded", logo.className)}
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter text-white">
                {logo.title}
              </span>
            </a>

            {/* Menu Hamburger */}
            <Sheet>
              <SheetTrigger 
                render={
                  <button 
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                    )} 
                  />
                }
              >
                <Menu className="size-4" />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-black/90 backdrop-blur-xl border-l border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className={cn("max-h-8 rounded", logo.className)}
                        alt={logo.alt}
                      />
                      <span className="text-lg font-semibold tracking-tighter text-white">
                        {logo.title}
                      </span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  
                  {/* Contatti nel menu mobile */}
                  <div className="border-t border-white/10 pt-4 flex flex-row gap-3 justify-end">
                    <a 
                      href="tel:+393XXXXXXXXX" 
                      className="p-2 text-white hover:text-emerald-400 transition-colors"
                    >
                      <PhoneCallIcon className="size-5" />
                    </a>
                    <a 
                      href="https://instagram.com/tuoprofilo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white hover:text-emerald-400 transition-colors"
                    >
                      <InstagramIcon className="size-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export { Navbar1 };
export type { Navbar1Props, MenuItem, LogoProps };