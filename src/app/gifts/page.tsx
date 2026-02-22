import GiftsCategory from "../../category/GiftsCategory";

type Props = {};

const Gifts = (props: Props) => {
  return (
    <section className="py-4 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <GiftsCategory   />
        <GiftsCategory   />
      </div>
    </section>
  );
};

export default Gifts;
