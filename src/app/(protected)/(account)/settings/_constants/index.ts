import { SettingsMenuGRoup } from "interfaces";

export const SETTINGS_MENU_GROUPS: SettingsMenuGRoup[] = [
  {
    title: "Account Settings",
    items: [
      {
        title: "Basic Info",
        href: "/settings/account/basic-info",
      },
      // {
      //   title: "Privacy",
      //   href: "/settings/account/privacy",
      //   comingSoon: true,
      // },
      {
        title: "Password/Security",
        href: "/settings/account/security",
      },
    ],
  },

  {
    title: "Legal Policies",
    items: [
      {
        title: "Terms of Services",
        href: "/legal/terms-of-services",
      },
      {
        title: "Privacy Policy",
        href: "/legal/privacy-policy",
      },
      {
        title: "Cookie Policy",
        href: "/legal/cookie-policy",
      },
    ],
  },

  {
    title: "Account Management",
    items: [
      // {
      //   title: "Disable Account",
      //   href: "/settings/disable-account",
      // },
      {
        title: "Close Account",
        href: "/settings/close-account",
      },
    ],
  },
];
