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

export const toSentenceCase = (input: string): string => {
  return input.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
};
