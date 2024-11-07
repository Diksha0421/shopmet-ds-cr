import { useEffect } from "react";

export const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | shopping cart`;
  }, [title]);
  return null;
};
