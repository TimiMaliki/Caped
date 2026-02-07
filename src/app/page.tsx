import Head from "./pages/Header";


type Props = {
  linkData: any[];
  ellipse: string;
  group: string;
  style: React.CSSProperties;
};

const page = ({ linkData, ellipse, group, style }: Props) => {
  return (
   <main>
  <div className="flex">
  <Head/>

  </div>
   </main>
  )
}

export default page




