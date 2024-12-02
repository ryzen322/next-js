import { getDetails } from "@/server/api";

export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const titleId = (await params).id;

  const detail = await getDetails(Number(titleId));

  return (
    <div className=" h-dvh w-full flex items-center justify-center ">
      <div className=" w-2/5 h-10 bg-stone-800 rounded-sm text-white flex items-center justify-center">
        {detail.map((item) => item.name)}
      </div>
    </div>
  );
}
