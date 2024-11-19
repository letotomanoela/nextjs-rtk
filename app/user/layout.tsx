import Link from "next/link";
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-x-5">
        <Link href="/user">List user</Link>
        <Link href="/user/add-user">Add user</Link>
        <Link href="/user/update-user">Update user</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default UserLayout;
