export const setCookie = (cname: string, cvalue: string) => {
  if (typeof document !== "undefined") {
    // for client side rendering
    const d = new Date();

    d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // 24 hours
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
};

export const getCookie = (name: string): string | null => {
  if (typeof document !== "undefined") {
    // for client side rendering
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies?.[i]?.trim();
      if (cookie?.startsWith(`${name}=`)) {
        return cookie?.substring(name.length + 1);
      }
    }
  }
  return null;
};

export const deleteCookie = (cname: string) => {
  if (typeof document !== "undefined") {
    // for client side rendering
    document.cookie = cname + "=" + "" + ";max-age=0path=/";
  }
};
