import { useEffect } from "react";
import { useHistory } from "react-router";

export default function UrlTracker({ open, setH }) {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      setH(prev => [...prev, location.pathname]);
      open();
    });
  }, [history, open, setH]);

  return null;
}
