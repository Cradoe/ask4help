import clsx from "clsx";
import { Card } from "components/card";
import { LinkButton } from "components/link-button";
import { UserRole } from "lib/enum";
import Image from "next/image";
import Link from "next/link";

const options = [
  {
    icon: "/book.png",
    title: "Student",
    value: "user",
    caption:
      "Aspiring Scholar, seeking for international study advice and mentorship.",
  },
  {
    icon: "/advisor-icon.png",
    title: "Study Advisor",
    value: "helper",
    caption:
      "Study Advisor or Educational Mentor, seeking to provide quality international study advice and mentorship.",
  },
];

export const UserTypeOptions = ({ selectedRole }: { selectedRole: string }) => {
  return (
    <div className="mt-10">
      <ul className="space-y-5">
        {options?.map((option) => (
          <li key={option.value}>
            <Link
              href={`/get-started/${option.value}`}
              className="text-left block"
            >
              <Card
                className={clsx(
                  "grid grid-cols-[1fr_2rem] items-center ease-in-out duration-200",
                  {
                    "bg-secondary-50 border-secondary-500":
                      selectedRole === UserRole.USER &&
                      option.value === UserRole.USER,
                  },
                  {
                    "bg-primary-50 border-primary-500":
                      selectedRole === UserRole.HELPER &&
                      option.value === UserRole.HELPER,
                  },
                  option.value === UserRole.USER
                    ? "hover:bg-secondary-50 hover:border-secondary-200"
                    : "hover:bg-primary-50  hover:border-primary-200"
                )}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[3rem_1fr] gap-4 items-center">
                  <Image
                    src={option.icon}
                    alt=""
                    height={20}
                    width={20}
                    className="w-full h-auto hidden lg:block"
                  />
                  <div>
                    <div className="font-bold">{option.title}</div>
                    <div className="text-xs md:text-sm">{option.caption}</div>
                  </div>
                </div>

                {/* radio-like button  */}
                <div
                  className={clsx(
                    "h-8 w-8 rounded-full border flex items-center justify-center",
                    {
                      "bg-secondary-500":
                        selectedRole === UserRole.USER &&
                        option.value === UserRole.USER,
                    },
                    {
                      "bg-primary-500":
                        selectedRole === UserRole.HELPER &&
                        option.value === UserRole.HELPER,
                    }
                  )}
                >
                  {option.value === selectedRole && (
                    <div className={"h-3 w-3 rounded-full bg-white"}></div>
                  )}
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <LinkButton
          href={`/register/${selectedRole}`}
          radius="rounded-full"
          className="w-full h-12"
          variant="secondary"
        >
          Get Started
        </LinkButton>
      </div>
    </div>
  );
};
