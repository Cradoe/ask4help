import { SettingsMenuGRoup } from "interfaces";

export const SETTINGS_MENU_GROUPS: SettingsMenuGRoup[] = [
  {
    title: "Password/Security",
    items: [
      {
        title: "Change Password",
        href: "/settings/account/security/password",
      },
      {
        title: "Phone Number",
        href: "/settings/account/security/phone-number",
      },
      // {
      //   title: "Two Step Verification",
      //   href: "/settings/account/security/2fa",
      //   comingSoon: true,
      // },
    ],
  },
];
