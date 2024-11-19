"use client";
import { User } from "@prisma/client";
import { useState } from "react";
import { Input } from "./ui/input";

const ListUser = ({ user }: { user: User[] }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="space-y-5 mt-8 pl-8">
      <div>
        <Input onChange={(e) => setSearch(e.target.value)} value={search} />
      </div>
      <div>
        {user
          .filter((el) => el.name?.toLowerCase().includes(search.toLowerCase()))
          ?.map((item) => (
            <p key={item.id}> {item.name}</p>
          ))}
      </div>
    </div>
  );
};
export default ListUser;
