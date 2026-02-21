
import Home from "./Home/page";
type Props = {
  linkData: any[];
  ellipse: string;
  group: string;
  style: React.CSSProperties;
};

const page = ({ linkData, ellipse, group, style }: Props) => {
  return (
   <main>
   <Home/>
   </main>
  )
}

export default page




