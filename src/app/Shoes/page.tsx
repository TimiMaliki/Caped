import ShoesCategory from "../../category/ShoesCategory";

type Props = {};

const Clothes = (props: Props) => {
  return (
    <section className="py-4 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <ShoesCategory />
        <ShoesCategory />
      </div>
    </section>
  );
};

export default Clothes;
