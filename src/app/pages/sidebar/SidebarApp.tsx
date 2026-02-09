"use client";
import Image from "next/image";
import  star from "../../../assets/mainLayout-imagies/star.png"
import  cloth from "../../../assets/mainLayout-imagies/cloth.png"
import  shoe from "../../../assets/mainLayout-imagies/shoe.png"
import  accessories from "../../../assets/mainLayout-imagies/access.png"
import  active from "../../../assets/mainLayout-imagies/active.png"
import  gift from "../../../assets/mainLayout-imagies/gift.png"
import  inspire from "../../../assets/mainLayout-imagies/inspire.png"
import { brandName } from "../../pages/Header/Header";

import {sideMenu} from "../Header/Header"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter ,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
 



const sidebarmenu: Array<sideMenu> = [
  {
  icons: star,
  title: "New In",
  url: "/new-in",
},
{
  icons: cloth,
  title: "Clothing",
  url: "/clothing",
},
{
  icons: shoe,
  title: "Shoes",
  url: "/shoes",
},
{
  icons:accessories,
  title: "Accessories",
  url: "/accessories",
},
{
  icons: active,
  title: "Activewears",
  url: "/activewears",
},
{
  icons: gift,
  title: "Gifts & Living",
  url: "/gifts-living",
},
{
  icons: inspire,
  title: "Inspiration",
  url: "/inspiration",
},

];
type Props = {
  
}

const SidebarApp = (props: Props) => {
  return (
  <Sidebar
      className="
        text-black
        fixed
        top-0
        left-0
        h-screen
        w-72
        z-50
      "
    >
      <SidebarHeader className="p-6 font-bold text-xl bg-white">
        {brandName}
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarMenu>
          {sidebarmenu.map((menu) => (
            <SidebarMenuItem key={menu.title} className="px-4 py-2">
              <SidebarMenuButton asChild>
                <a className="flex items-center gap-3" href="#">
                  <Image
                    src={menu.icons}
                    alt={menu.title}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">
                    {menu.title}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 text-xs text-gray-500">
        © 2026
      </SidebarFooter>
    </Sidebar>
  )
}

export default SidebarApp
 
