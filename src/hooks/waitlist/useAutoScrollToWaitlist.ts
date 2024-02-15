"use client";

import { useEffect } from "react";

export const useAutoScrollToWaitlist = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#waitlist") {
      const waitlistSection = document.getElementById("waitlist");

      if (waitlistSection) {
        // Scroll to the waitlist section
        waitlistSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
};
