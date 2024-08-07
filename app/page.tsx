import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2> Main Page</h2>
      <UserButton />
    </div>
  );
}
