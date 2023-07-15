import React from "react";
import type { Menu } from "../types/components";
import CallIcon from "@mui/icons-material/Call";
import ForumIcon from "@mui/icons-material/Forum";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import SmsIcon from "@mui/icons-material/Sms";
import HelpIcon from "@mui/icons-material/Help";
import DashboardIcon from "@mui/icons-material/Dashboard";

const menu: Menu[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    href: "/",
  },
  {
    label: "Calls",
    icon: CallIcon,
    href: "/calls/list",
  },
  {
    label: "Messages",
    icon: ForumIcon,
    href: "/messages/list",
  },
  {
    label: "People",
    icon: PeopleIcon,
    href: "/people/list",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
  {
    label: "SMS Enrollment",
    icon: SmsIcon,
    href: "/sms-enrollment",
  },
  {
    label: "Help",
    icon: HelpIcon,
    href: "/help",
  },
];

export default menu;
