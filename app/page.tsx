import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-200 rounded">
        <h1 className="text-xl font-bold text-center my-4 ">Strings</h1>
        <div>
          <Link
            href="/signin"
            className="bg-slate-900 my-4 p-3 text-white rounded-lg block"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-slate-900 my-4 p-3 text-white rounded-lg block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
