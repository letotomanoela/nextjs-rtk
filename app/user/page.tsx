import prisma from "@/config/db";
import ListUser from "@/components/list-user";

const User = async () => {
  const user = await prisma.user.findMany();
  return (
    <div>
      <ListUser user={user} />
    </div>
  );
};
export default User;
