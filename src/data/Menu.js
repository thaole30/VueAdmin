const items = [
  {
    title: "Home",
    path: "/home",
    // Optional
    elemBefore: () => <Icon name="coffee" />,
  },
  {
    title: "About",
    itemId: "/about",
    elemBefore: () => <Icon name="user" />,
    subNav: [
      {
        title: "Projects",
        itemId: "/about/projects",
        // Optional
        elemBefore: () => <Icon name="cloud-snow" />,
      },
      {
        title: "Members",
        itemId: "/about/members",
        elemBefore: () => <Icon name="coffee" />,
      },
    ],
  },
  {
    title: "Another Tab",
    path: "/another",
    subNav: [
      {
        title: "Teams",
        path: "/another/teams",
        // Optional
        // elemBefore: () => <Icon name="calendar" />
      },
    ],
  },
];
