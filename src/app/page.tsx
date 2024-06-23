import Image from "next/image";
import { notFound } from "next/navigation";

interface DataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData() {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2>Data list</h2>
      {data.map((item: DataProps) => (
        <li key={item.id} className='mb-2 border p-2'>
          <h2>{item.title}</h2>
          <p>USER ID: {item.userId}</p>
          <p>ID: {item.id}</p>
          <p>DESC: {item.body}</p>
        </li>
      ))}
    </main>
  );
}
