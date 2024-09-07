import React from "react";
import { FloatingDock } from "../../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGmail
} from "@tabler/icons-react";
import { WordPullUp } from "../animations/WordPullUp";

export function Contact() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ansh-bhatt-py",
    },

    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:anshbhatt140@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/AnshBhatt906",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/BhattAnsh",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[35rem] w-full">
      <WordPullUp text="CONTACT ME"/>
      <br />
      <br />
      <br />
      <FloatingDock
        mobileClassName=""
        items={links}
      />
    </div>
  );
}
