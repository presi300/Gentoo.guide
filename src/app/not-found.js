import Link from "next/link";
import Text from "./components/Text/Text";

export default function NotFound() {
  return (
    <div className="flex items-center h-screen justify-center flex-col">
      <Text variant="heading">404</Text>
      <Text variant="heading">
        Oops... Something must have gone wrong here.
      </Text>
      <div className="mt-16">
        <Link href="/Chapters/StartPage">
          <Text variant="md">
            <div className="p-2 px-4 bg-[#41366C] bg-opacity-35 rounded-full hover:bg-opacity-50 transition-all hover:scale-105 ">
              Go back to the start page?
            </div>
          </Text>
        </Link>
      </div>
    </div>
  );
}
