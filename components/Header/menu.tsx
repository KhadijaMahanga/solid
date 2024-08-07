import { Menu } from "@/types/menu";

const menuList: Menu[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
      newTab: false,
    },
    {
      id: 33,
      title: "In the Media",
      path: "/news",
      newTab: true,
    },
    {
      id: 4,
      title: "Our Initiatives",
      newTab: false,
      submenu: [
        {
          id: 41,
          title: "Kike Media Festival",
          path: "/media-festival",
          newTab: false,
        },
        {
          id: 42,
          title: "Kike Tech Talks",
          path: "/techtalks",
          newTab: false,
        },
      ],
    },
    {
      id: 2,
      title: "About Us",
      path: "/about",
      newTab: false,
    },
    {
      id: 3,
      title: "Contact Us",
      path: "/contact",
      newTab: false,
    },
  ];

  export default menuList;