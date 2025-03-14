// import "../../../styles/post.css";
import { Link } from "react-router";

export function BlogHeader() {
  return (
    <>
      <header className="w-full flex flex-col items-center my-4 pb-4 border-b-gray-400 border-b-2 border-dashed">
        {/* <Link href="/">
          <Image
            src="/selfie_4.jpg"
            width={100}
            height={100}
            alt="Mateus Queirós"
            className="rounded-full mb-4"
          />
        </Link> */}

        <Link className="shadow-none hover:shadow-none" to="/blog">
          <h2 className="text-2xl font-bold text-center md:text-left mb-2">
            Mateus Queirós
          </h2>
        </Link>
        {/* <span className="flex flex-col items-center text-gray-500 dark:text-gray-400 text-md">
          <i>"O domínio do medo pela disciplina"</i>
          <span>- Wilson Brown</span>
        </span> */}
        <span className="flex flex-col items-center text-gray-500 dark:text-gray-400 text-md">
          <i>Web development and programming</i>
        </span>
      </header>
    </>
  );
}
