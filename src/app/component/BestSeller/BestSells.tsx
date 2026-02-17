import BestSellerComponent from "../../component/BestSeller/BestSeller";

type Props = {};

const Inspiration = (props: Props) => {
  return (
    <section className="py-4 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <BestSellerComponent   />
      </div>
    </section>
  );
};

export default Inspiration;
