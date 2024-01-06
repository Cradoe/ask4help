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
