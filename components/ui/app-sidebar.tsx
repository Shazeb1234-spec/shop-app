"use client"

import * as React from "react"
import { ChartBar, FolderArchive, LayoutDashboard, ListCheck, UsersIcon, UsersRound } from "lucide-react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconInnerShadowTop } from "@tabler/icons-react"

const data = {
  user: {
    name: "Shazeb :D",
    email: "shazeb.arafin@gmail.com",
    avatar: "/Gall2.jpg",
  },
  navMain: [
    {
       title: "Home",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "All Products",
      url: "/products",
      icon: ListCheck,
    },
    {
      title: "Cart",
      url: "/cart",
      icon: ChartBar,
    },
    {
      title: "Login",
      url: "/login",
      icon: FolderArchive,
    },
    {
      title: "Me",
      url: "#my-favourite-book",
      icon: UsersIcon,
    },
    {
      title: ":D",
      url: "#my-message",
      icon: UsersRound,
    },
  ],

 }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Shazeb</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
       </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
