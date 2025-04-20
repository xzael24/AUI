"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import React, { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users, Zap } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { ChevronDown } from "lucide-react";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { HeroScrollDemo } from "@/components/function/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/function/InfiniteMovingCardsDemo";

export default function Home() {
  const [platformText, setPlatformText] = useState("Platforms");
  
  useEffect(() => {
    const texts = ["Platforms", "Devices"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setPlatformText(texts[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Platforms",
      link: "#platforms",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Features data
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-500" />,
      title: "Smart Scheduling",
      description:
        "Effortlessly plan tasks with our intelligent scheduling system that syncs with your calendar and prioritizes deadlines.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: "Task Tracking",
      description:
        "Stay on top of your tasks with real-time progress tracking and automated reminders to keep you focused.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Team Collaboration",
      description:
        "Collaborate seamlessly with your team, assign tasks, share updates, and manage projects in one place.",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Quick Integrations",
      description:
        "Connect with your favorite tools like Slack, Google Drive, and more for a streamlined workflow.",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is Mewing Tasks?",
      answer:
        "Mewing Tasks is a powerful task management platform designed to streamline your workflow with smart scheduling, task tracking, team collaboration, and seamless integrations.",
    },
    {
      question: "Is Mewing Tasks free to use?",
      answer:
        "Yes, Mewing Tasks offers a free plan with core features. For advanced features and higher usage quotas, you can upgrade to a premium plan. Check pricing details for more information.",
    },
    {
      question: "Which platforms is Mewing Tasks available on?",
      answer:
        "Mewing Tasks is available on Android (Play Store), iOS (App Store), and as a desktop website accessible via any browser.",
    },
    {
      question: "Can I integrate Mewing Tasks with other tools?",
      answer:
        "Absolutely! Mewing Tasks supports quick integrations with popular tools like Slack, Google Drive, and more to enhance your productivity.",
    },
    {
      question: "How does the smart scheduling feature work?",
      answer:
        "Our smart scheduling system syncs with your calendar, prioritizes deadlines, and suggests optimal times for tasks to help you stay organized and efficient.",
    },
  ];

  // Features section will now have a clean, static layout without scroll effects

  return (
    <div className="relative w-full min-h-screen">
      <StarsBackground />
      <ShootingStars />
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <ThemeToggleButton />
            <NavbarButton variant="primary">Join</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col items-center gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full max-w-xs"
              >
                Join
              </NavbarButton>
              <ThemeToggleButton />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <HeroScrollDemo />

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Powerful Features for <Cover>Mewing Tasks</Cover>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              Discover the tools that make task management intuitive, efficient,
              and collaborative.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 10,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    whileHover: { duration: 0.3 },
                  }}
                  className="bg-neutral-800 p-6 rounded-xl shadow-lg relative"
                  style={{ zIndex: 1 }}
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white text-center">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-neutral-400 text-center">
                    {feature.description}
                  </p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Availability Section */}
      <section id="platforms" className="py-20 relative">
        <StarsBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Available on Your Favorite{" "}
              </span>
              <span className="inline-block relative w-[200px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={platformText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
                  >
                    {platformText}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
              Access Mewing Tasks anytime, anywhere, on your preferred device.
            </p>
          </motion.div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
            <Card
              title="Play Store"
              icon={<Image src="/PS.png" alt="Play Store" width={48} height={48} className="w-12 h-12" />}
              description="Download on your Android device"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-transparent"
              />
            </Card>
            <Card
              title="App Store"
              icon={<Image src="/AS.png" alt="App Store" width={48} height={48} className="w-12 h-12" />}
              description="Available for iOS devices"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-transparent"
                colors={[[59, 130, 246]]}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/20 dark:bg-black/40" />
            </Card>
            <Card
              title="Desktop Website"
              icon={<DesktopIcon />}
              description="Access via any browser"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-transparent"
                colors={[[147, 51, 234]]}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <StarsBackground />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                What People Say About Mewing Tasks
              </h2>
              <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
                Hear from our satisfied users about their experience with our platform.
              </p>
            </motion.div>
          </div>
          <div className="w-full">
            <InfiniteMovingCardsDemo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}Z
<section id="faq" className="py-20 relative">
  <StarsBackground />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
        Got questions? We’ve got answers about Mewing Tasks.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-1 bg-neutral-900/70 p-6 rounded-xl shadow-xl max-w-4xl mx-auto border border-neutral-700"
    >
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-neutral-700 last:border-none transition-colors duration-300"
        >
          <button
            className="flex justify-between items-center w-full py-5 text-left"
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
          >
            <h3 className="text-lg font-medium text-white">{faq.question}</h3>
            <motion.div
              animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-400"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openFaqIndex === index && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden will-change-[height,opacity]"
              >
                <div className="pb-5 text-neutral-300">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  </div>
</section>


      {/* CTA Section */}
      <section id="cta" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Ready to Level Up Your Task Management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Join thousands of users and start managing tasks with Mewing Tasks
            today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button className="relative text-lg px-8 py-3 bg-transparent border border-white text-white overflow-hidden group focus:outline-none rounded-md transition-transform duration-300 hover:scale-105">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Try for Free
              </span>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-white transition-all duration-500 ease-out group-hover:w-56 group-hover:h-56"></span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Text Hover Effect Section */}
      <section className="relative py-20 overflow-hidden">
        <StarsBackground />
        <div className="relative z-10">
          <div className="h-[40rem] flex items-center justify-center flex-col gap-8">
            <TextHoverEffect text="MEWING" />
            <TextHoverEffect text="TASKS" />
          </div>
        </div>
      </section>
    </div>
  );
}

const DesktopIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M20 3H4C2.9 3 2 3.9 2 5V15C2 16.1 2.9 17 4 17H10L8 21V22H16V21L14 17H20C21.1 17 22 16.1 22 15V5C22 3.9 21.1 3 20 3ZM20 15H4V5H20V15Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="mx-auto flex items-center justify-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-neutral-300 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-2 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
