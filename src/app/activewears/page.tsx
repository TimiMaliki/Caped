import ActivewearsCategory from "../../category/ActivewearsCategory";

type Props = {};

const activewears = (props: Props) => {
  return (
    <section className="py-4 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <ActivewearsCategory   />
      </div>
    </section>
  );
};

export default activewears;
