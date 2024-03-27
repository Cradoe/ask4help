import { UserRole } from "./enum";

export const scrollToElement = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  // check to see if window is available
  if (window && window?.scrollTo) {
    // prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }
};

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = [
    "GOOGLE_SHEETS_SERVICE_ACCOUNT",
    "GOOGLE_SHEETS_PRIVATE_KEY",
    "GOOGLE_SHEETS_SUBSCRIBERS_ID",
    "GOOGLE_SHEETS_SUBSCRIBERS_PAGE",
    "NEXT_PUBLIC_API_BASE_URL",
    "NEXT_PUBLIC_WS_URL",
  ];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. This site will not work without them. \n${missingEnvironmentVariables.join(
        "\n"
      )}\n`
    );
  }
};

export const formatDate = (date: string) => {
  if (!date || date.toString() === "") return "N/A";
  const inputDate =
    date?.split("-")[0]?.length === 4 ? new Date(date) : parseInputDate(date);

  return inputDate.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getTimeFromDate = (dateString: string): string => {
  const inputDate = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  return inputDate.toLocaleTimeString(undefined, options);
};
export const getTimeAgo = (dateString: string): string => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const secondsAgo = Math.floor(timeDifference / 1000);

  if (secondsAgo < 60) {
    return secondsAgo <= 1 ? "just now" : `${secondsAgo} seconds ago`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 3600) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
    };
    return inputDate.toLocaleTimeString(undefined, options);
  }
};
const parseInputDate = (input: string): Date => {
  const [datePart] = input.split(" ");
  const [day, month, year] = datePart!.split("-");

  // Ensure the date string is in the "yyyy-mm-dd" format
  const formattedDateString = `${year}-${month}-${day}`;

  return new Date(formattedDateString);
};

export const toSentenceCase = (input: string): string => {
  return input.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
};

export const addCommaToNumber = (val: number | string) => {
  return new Intl.NumberFormat().format(Number(val));
};

export const getPersonalProfileUrl = (userRole: UserRole): string => {
  if (userRole === UserRole.USER) {
    return "/profile/user";
  } else if (userRole === UserRole.HELPER) {
    return "/profile/helper";
  }

  return "";
};

export const getProfileUrl = (
  userRole: UserRole | undefined,
  userId: string | undefined
): string => {
  if (userRole === UserRole.USER) {
    return `/user/${userId}`;
  } else if (userRole === UserRole.HELPER) {
    return `/helper/${userId}`;
  }

  return "";
};
