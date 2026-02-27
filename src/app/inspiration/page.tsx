import InspirationCategory from "../../category/InspirationCategory";

type Props = {};

const Inspiration = (props: Props) => {
  return (
    <section className="py-4 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <InspirationCategory   />
      </div>
    </section>
  );
};

export default Inspiration;
