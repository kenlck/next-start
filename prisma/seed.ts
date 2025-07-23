import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

async function main() {
  const password = await bcrypt.hash("pppppppp", 10);
  await prisma.user.upsert({
    where: { email: "ken@ken.com" },
    update: {},
    create: {
      email: "ken@ken.com",
      password,
    },
  });
  console.log("Seeded user: ken@ken.com / pppppppp");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
