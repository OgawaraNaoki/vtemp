import { useNavigate } from "react-router";
import { Head } from "@/components/Head";

export const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/app");
  };

  return (
    <>
      <Head description="Welcome to Vitemp"></Head>
      <div className="bg-white h-[100vh] flex flex-col items-center gap-4 ">
        <article className="text-3xl text-center font-bold underline basis-1/3   ">
          V-temp Vite x Vitest Template
        </article>
        <button
          onClick={handleStart}
          className="text-3xl font-bold ring hover:ring-red"
        >
          Let's start here
        </button>
      </div>
    </>
  );
};
