import { db } from "./db";

export const getDetails = async (titleId: number) => {
  const detail = await db.query.post.findMany({
    where: (post, { eq }) => eq(post.id, Number(titleId)),
  });

  return detail;
};
