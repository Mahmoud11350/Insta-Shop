import { useState } from "react";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";

const PageSelect = () => {
  const AllPages: number[] = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className=" flex gap-4 items-center justify-center mt-5">
      <Link
        to={`/products?page=${currentPage == 1 ? 3 : currentPage - 1}`}
        className="p-regular-18 flex items-center gap-1"
        onClick={() =>
          setCurrentPage(() => (currentPage == 1 ? 3 : currentPage - 1))
        }
      >
        <GrPrevious />
        Prev
      </Link>
      {AllPages.map((page) => (
        <Link
          key={page}
          className={`px-4 py-2 font-bold  border rounded-lg ${
            page == currentPage ? "bg-green-400 text-white" : ""
          }`}
          to={`/products?page=${page}`}
          onClick={() => setCurrentPage(() => page)}
        >
          {page}
        </Link>
      ))}

      <Link
        to={`/products?page=${currentPage == 3 ? 1 : currentPage + 1}`}
        onClick={() =>
          setCurrentPage(() => (currentPage == 3 ? 1 : currentPage + 1))
        }
        className="p-regular-18 flex items-center gap-1"
      >
        Next
        <GrNext />
      </Link>
    </div>
  );
};
export default PageSelect;
