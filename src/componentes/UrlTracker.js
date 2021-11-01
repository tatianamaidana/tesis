import { useEffect } from "react";
import { useHistory } from "react-router";

export default function UrlTracker({ open, setH, h }) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      setH((prev) => [...prev, location.pathname]);
      if (location.pathname !== h[h.length - 2]) {
        open();
      }
    });
  }, [history, open, setH, h]);

  return null;
}
