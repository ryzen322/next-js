export default async function Details({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const titleId = (await params).id;

  console.log(titleId);

  return (
    <div className=" h-dvh w-full flex items-center justify-center ">
      <div className=" w-2/5 h-10 bg-stone-800 rounded-sm text-white flex items-center justify-center"></div>
    </div>
  );
}
