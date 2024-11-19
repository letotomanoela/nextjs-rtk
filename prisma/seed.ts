import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const users = [
  {
    name: "Talbert Halbord",
    email: "thalbord0@hibu.com",
  },
  {
    name: "Nike Delwater",
    email: "ndelwater1@blogspot.com",
  },
  {
    name: "Roch Cottrell",
    email: "rcottrell2@dedecms.com",
  },
  {
    name: "Em Venard",
    email: "evenard3@msu.edu",
  },
  {
    name: "Arielle Blunsom",
    email: "ablunsom4@virginia.edu",
  },
  {
    name: "Moselle Swynfen",
    email: "mswynfen5@xing.com",
  },
  {
    name: "Florella Harpin",
    email: "fharpin6@tinypic.com",
  },
  {
    name: "Marchelle Mullin",
    email: "mmullin7@quantcast.com",
  },
  {
    name: "Bridget Bodham",
    email: "bbodham8@devhub.com",
  },
  {
    name: "Gerrie Ruffy",
    email: "gruffy9@nps.gov",
  },
];

const posts = [
  {
    title: "Chico & Rita",
    content: "Ornamental Railings",
    published: true,
  },
  {
    title: "In Love and War",
    content: "Roofing (Asphalt)",
    published: true,
  },
  {
    title: "Whatever It Takes",
    content: "Masonry",
    published: false,
  },
  {
    title: "Very Bad Things",
    content: "Temp Fencing, Decorative Fencing and Gates",
    published: false,
  },
  {
    title: "Alex and Emma",
    content: "RF Shielding",
    published: true,
  },
  {
    title: "People vs. Larry Flynt, The",
    content: "EIFS",
    published: false,
  },
  {
    title: "Breaking the Girls ",
    content: "Termite Control",
    published: false,
  },
  {
    title:
      "Luke and Lucy: The Texas Rangers (Suske en Wiske: De Texas rakkers)",
    content: "Ornamental Railings",
    published: false,
  },
  {
    title: "14 Hours (Fourteen Hours)",
    content: "Rebar & Wire Mesh Install",
    published: true,
  },
  {
    title: "Brest Fortress (Brestskaya krepost)",
    content: "Temp Fencing, Decorative Fencing and Gates",
    published: true,
  },
];
async function main() {
  const createUser = await prisma.user.findMany();

  if (createUser) {
    const newPost = posts.map((item, index) => {
      return {
        authorId: createUser[index].id,
        ...item,
      };
    });

    const createPost = await prisma.post.createMany({
      data: [...newPost],
    });

    console.log(createPost);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
