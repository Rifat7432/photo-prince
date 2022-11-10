import { useEffect } from "react";

// customise hook

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
