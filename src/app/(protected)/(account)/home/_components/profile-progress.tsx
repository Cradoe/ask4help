import Link from "next/link";

export const ProfileProgress = () => {
  return (
    <div className="mt-12 bg-profile-progress bg-cover bg-no-repeat bg-center w-full h-full p-10 text-white rounded-md">
      <div className="text-2xl">Let us start with the basics</div>
      <div className="text-xs mt-5 mb-7">
        Get more by setting up a profile you love.
      </div>

      <div className="bg-gray-500 w-full h-1 w-1/2 rounded-full relative after:absolute after:top-0 after:left-0 after:bg-primary-600 after:w-1/2 after:h-full"></div>
      <Link href="/profile" className="text-xs text-primary-600 mt-3 underline">
        50% Completed Profile
      </Link>
    </div>
  );
};
