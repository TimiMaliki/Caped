 import { StaticImageData } from "next/image";


interface brandName {
    name : string;
    // image: StaticImageData;
}

interface navData {
    title : string;
    link : string;
}


  
 interface sideMenu {
    icons : StaticImageData;
    url : string;
    title : string;
  }



const brandName = "caped"

const navData = [
  { title: "products", link: "/" },
  { title: "story", link: "/search" },
  { title: "manufacturing", link: "/privacy" },
  { title: "packaging", link: "/privacy" },
]

export { brandName, navData , sideMenu }