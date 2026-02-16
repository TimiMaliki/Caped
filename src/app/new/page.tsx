import NewCategory from "../modules/category/NewCategory"

type Props = {}

const New= (props: Props) => {
  return (
    <div>
          <section className="py-0 w-full ">
      <div className="px-4 sm:px-6 lg:px-8">
        <NewCategory />
         <NewCategory />
      </div>
    </section>
    </div>
  )
}

export default New