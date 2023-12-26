import { useEffect } from "react";

const useChangeDocTitle = (title) => {
  useEffect(() => {
    document.title = title || "Resnime";
  }, [location.pathname]);
};
export default useChangeDocTitle;
