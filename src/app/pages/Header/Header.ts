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
  { title: "Home", link: "/Home" },
  { title: "story", link: "/Story" },
  { title: "manufacturing", link: "/privacy" },
  { title: "packaging", link: "/privacy" },
]

export { brandName, navData , sideMenu }