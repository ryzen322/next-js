import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ForYou } from "./ForYou";

const Feed = () => {
  return (
    <Tabs
      defaultValue="For you"
      className=" w-full flex flex-col bg-muted/50 md:max-w-[85%]"
    >
      <TabsList>
        <TabsTrigger value="For you">For you</TabsTrigger>
        <TabsTrigger value="Following">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="For you">
        <ForYou />
      </TabsContent>
      <TabsContent value="Following">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default Feed;
