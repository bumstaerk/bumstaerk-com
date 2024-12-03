import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-4xl font-bold">bumstaerk.com</h1>
    </div>
  );
}
