"use client";

import {
  AnimatePresence,
  motion,
  type BezierDefinition,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import styles from "./curved-menu.module.css";

// cspell:ignore Awwwards Dribbble

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Despre noi", href: "#despre-noi" },
  { title: "Galerie", href: "#galerie" },
  { title: "Apartamente", href: "#apartamente" },
  { title: "Contact", href: "#contact" },
];

const baseEase: BezierDefinition = [0.76, 0, 0.24, 1];
const indicatorOpenEase: BezierDefinition = [0.22, 1, 0.36, 1];
const indicatorCloseEase: BezierDefinition = [0.65, 0, 0.35, 1];

const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: baseEase },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.75, ease: baseEase },
  },
};

const linkSlide: Variants = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: {
      duration: 0.75,
      ease: baseEase,
      delay: 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: {
      duration: 0.65,
      ease: baseEase,
      delay: 0.03 * i,
    },
  }),
};

const indicatorScale: Variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: indicatorOpenEase },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: indicatorCloseEase },
  },
};

export function CurvedMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.toggleButton}
          aria-pressed={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
          >
            <span />
            <span />
          </span>
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <MenuPanel key="curved-menu" closeMenu={() => setIsOpen(false)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

type MenuPanelProps = {
  closeMenu: () => void;
};

function MenuPanel({ closeMenu }: MenuPanelProps) {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <motion.aside
      className={styles.panel}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.body}>
        <div className={styles.nav} onMouseLeave={() => setSelected(pathname)}>
          <p className={styles.navHeader}>Meniu</p>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              className={styles.linkRow}
              onMouseEnter={() => setSelected(item.href)}
              custom={index}
              variants={linkSlide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.span
                className={styles.indicator}
                variants={indicatorScale}
                animate={selected === item.href ? "open" : "closed"}
              />
              <Link href={item.href} onClick={closeMenu}>
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
        <nav className={styles.footer}>
          <a
            href="https://wa.me/+40741274273"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
          <a
            href="https://www.instagram.com/mr.lucass2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <button
            type="button"
            className={styles.footerToggle}
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            {resolvedTheme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
      <Curve />
    </motion.aside>
  );
}

function Curve() {
  const height = useViewportHeight();

  const { initialPath, targetPath } = useMemo(() => {
    const safeHeight = Math.max(height, 1000);
    return {
      initialPath: `M100 0 L200 0 L200 ${safeHeight} L100 ${safeHeight} Q-100 ${
        safeHeight / 2
      } 100 0`,
      targetPath: `M100 0 L200 0 L200 ${safeHeight} L100 ${safeHeight} Q100 ${
        safeHeight / 2
      } 100 0`,
    };
  }, [height]);

  const curveMotion = useMemo<Variants>(
    () => ({
      initial: { d: initialPath },
      enter: {
        d: targetPath,
        transition: { duration: 1, ease: baseEase },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.8, ease: baseEase },
      },
    }),
    [initialPath, targetPath]
  );

  const safeHeight = Math.max(height, 1000);

  return (
    <svg
      className={styles.curve}
      width="100"
      height={safeHeight}
      viewBox={`0 0 200 ${safeHeight}`}
      preserveAspectRatio="none"
    >
      <motion.path
        variants={curveMotion}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}

function useViewportHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      setHeight(window.innerHeight);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return height;
}
