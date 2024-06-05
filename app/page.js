import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">hanzala is a good boy</h1>
      <Link href="/properties">to properties</Link>
    </div>
  );
}
