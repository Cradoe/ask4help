import { SocialMediaHandle } from "interfaces";
import { SOCIAL_MEDIAS } from "lib/enum";
import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export const SocialMediaLink = ({
  socialHandle,
}: {
  socialHandle: SocialMediaHandle;
}) => {
  // Facebook
  if (socialHandle.platform.name === SOCIAL_MEDIAS.FACEBOOK) {
    return (
      <Link
        href={`${socialHandle?.platform?.urlPrefix}${socialHandle?.handle}`}
        className="bg-blue-200/80 hover:bg-blue-300 ease-in-out duration-200 px-4 py-2 flex gap-2 items-center rounded-md focus:outline-blue-500"
      >
        <FaFacebook className="text-blue-600 text-3xl" />{" "}
        <span className="hidden md:block">Facebook</span>
      </Link>
    );
  }

  // X
  if (socialHandle.platform.name === SOCIAL_MEDIAS.TWITTER) {
    return (
      <Link
        href={`${socialHandle?.platform?.urlPrefix}${socialHandle?.handle}`}
        className="bg-black text-white hover:bg-black/80 ease-in-out duration-200 px-4 py-2 flex gap-2 items-center rounded-md focus:outline-secondary-500"
      >
        <FaXTwitter className="text-3xl" />{" "}
        <span className="hidden md:block">Twitter (X)</span>
      </Link>
    );
  }

  // LinkedIn
  if (socialHandle.platform.name === SOCIAL_MEDIAS.LINKEDIN) {
    return (
      <Link
        href={`${socialHandle?.platform?.urlPrefix}${socialHandle?.handle}`}
        className="bg-blue-300/50 hover:bg-blue-300 ease-in-out duration-200 px-4 py-2 flex gap-2 items-center rounded-md focus:outline-blue-500"
      >
        <FaLinkedin className="rounded-full text-3xl" />{" "}
        <span className="hidden md:block">LinkedIn</span>
      </Link>
    );
  }

  // Youtube
  if (socialHandle.platform.name === SOCIAL_MEDIAS.YOUTUBE) {
    return (
      <Link
        href={`${socialHandle?.platform?.urlPrefix}${socialHandle?.handle}`}
        className="bg-red-200/80 hover:bg-red-300 ease-in-out duration-200 px-4 py-2 flex gap-2 items-center rounded-md focus:outline-red-500"
      >
        <FaYoutube className="rounded-full text-red-600 text-3xl" />{" "}
        <span className="hidden md:block">Youtube</span>
      </Link>
    );
  }

  return null;
};
