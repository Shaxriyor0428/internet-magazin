import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ISidebar {
  title: string;
  id: number;
}
const Sidebar = ({ data, subject }: { data: ISidebar[]; subject: string }) => {
  return (
    <div className="my-20">
      <h2 className="text-[#555555] text-[26px] px-5 py-5 rounded-lg bg-white">
        {subject}
      </h2>
      <div className="flex flex-col gap-3 py-8 px-5">
        {data?.map((item) => (
          <div key={item.id} className="">
            <div className=" cursor-pointer flex items-center gap-2">
              <button>
                <MdOutlineKeyboardArrowRight />
              </button>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[6px] bg-primary"></div>
    </div>
  );
};

export default Sidebar;
