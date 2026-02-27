import AccessoriesCategory from "../../category/AccessoriesCategory";

type Props = {};

const accessory = (props: Props) => {
  return (
    <section className="py-4 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <AccessoriesCategory  />
      </div>
    </section>
  );
};

export default accessory;
