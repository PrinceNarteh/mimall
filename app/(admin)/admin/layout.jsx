"use client";

import dynamic from "next/dynamic";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiFolder, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

const menus = [
  { name: "dashboard", link: "/", icon: MdOutlineDashboard },
  { name: "user", link: "/", icon: AiOutlineUser },
  { name: "messages", link: "/", icon: FiMessageSquare },
  { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
  { name: "File Manager", link: "/", icon: FiFolder },
  { name: "Cart", link: "/", icon: FiShoppingCart },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];

const BaseLayout = dynamic(() => import("../BaseLayout"), { ssr: false });

export default function AdminLayout({ children }) {
  return <BaseLayout menus={menus}>{children}</BaseLayout>;
}
