import  star from "../../assets/mainLayout-imagies/star.png"
import  cloth from "../../assets/mainLayout-imagies/cloth.png"
import  shoe from "../../assets/mainLayout-imagies/shoe.png"
import  accessories from "../../assets/mainLayout-imagies/access.png"
import  active from "../../assets/mainLayout-imagies/active.png"
import  gift from "../../assets/mainLayout-imagies/gift.png"
import  inspire from "../../assets/mainLayout-imagies/inspire.png"

import {sideMenu} from "../../app/shared/Types"

const sidebarmenu: Array<sideMenu> = [
  {
  icons: star,
  title: "New In",
},
{
  icons: cloth,
  title: "Clothing",
},
{
  icons: shoe,
  title: "Shoes",
},
{
  icons:accessories,
  title: "Accessories",
},
{
  icons: active,
  title: "Activewears",
},
{
  icons: gift,
  title: "Gifts & Living",
},
{
  icons: inspire,
  title: "Inspiration",
},

];
type Props = {
  
}

const appSidebar = (props: Props) => {
  return (
    <div>appSidebar</div>
  )
}

export default appSidebar