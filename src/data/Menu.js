export const items = [
  {
    title: "Home",
    path: "/home",
    // Optional
    elemBefore: "account-circle",
  },
  {
    title: "About",
    path: "/about",
    elemBefore: "alert-octagram",
    subNav: [
      {
        title: "Projects",
        path: "/about/projects",
        // Optional
        elemBefore: "alien",
      },
      {
        title: "Members",
        path: "/about/members",
        elemBefore: "apple-icloud",
      },
    ],
  },
  {
    title: "Another Tab",
    path: "/another",
    subNav: [
      {
        title: "Teams",
        path: "android",
        // Optional
        // elemBefore: () => <Icon name="calendar" />
      },
    ],
  },
];
