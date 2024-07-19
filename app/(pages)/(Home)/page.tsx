import { signOut } from "@/auth";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="bg-slate-900 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <form action={async() => {
        "use server";

        await signOut();
      }}>
        <Button className="p-2 bg-slate-600" type="submit">
        Ride that dick back, nigger
      </Button>
      </form>
    </div>
    </div>
  );
}
