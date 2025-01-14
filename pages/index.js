import { supabase } from "@/utils/supabase";

export default function Home({ lessons }) {
  console.log({lessons});
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      working
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*");

  return {
    props: {
      lessons,
    },
  };
};
