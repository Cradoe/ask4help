import { SettingsMenuGRoup } from "interfaces";

export const SETTINGS_MENU_GROUPS: SettingsMenuGRoup[] = [
  {
    title: "Statement of Purpose Review",
    items: [
      {
        title: "Create task",
        href: "/tasks/new",
      },
      {
        title: "Manage task",
        href: "/tasks/manage",
      },
      {
        title: "Drafts",
        href: "/tasks/drafts",
      },
    ],
  },
];
