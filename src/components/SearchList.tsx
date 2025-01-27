import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ListItem {
  name: string;
  category: string;
  _id: string;
  imageUrl: string;
}

const SearchList = ({
  list,
  isSearch,
  setSearch,
}: {
  list: ListItem[];
  isSearch: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (list.length > 0 && isSearch)
    return (
      <div className="absolute z-50 top-search left-0 h-60 w-48 bg-lightGray border border-black overflow-y-scroll">
        <ul>
          {list.map(({ name, category, _id, imageUrl }, ind) => (
            <Link key={ind} href={`/products/${category}/${_id}`}>
              <li
                onClick={() => setSearch(false)}
                className="ml-2 my-1 text-sm flex items-center gap-1"
              >
                <span className="relative h-8 w-8">
                  <Image
                    src={imageUrl}
                    alt={""}
                    fill={true}
                    className="object-cover"
                  />
                </span>
                <h3>{name}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
};

export default SearchList;
