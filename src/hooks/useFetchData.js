import { useEffect, useRef, useState } from "react";
import apiService from "../service/apiService";
import isDeepEqual from "fast-deep-equal/react";

const useFetchData = (endpoint, qp = null, pid = 0, conToken = true) => {
  const [data, setData] = useState();
  const [error, setErrror] = useState();
  const [loading, setLoading] = useState();
  const qpRef = useRef(qp);

  if (!isDeepEqual(qpRef.current, qp)) {
    qpRef.current = qp;
  }

  useEffect(() => {
    if (endpoint) {
      setLoading(true);
      apiService(endpoint, "GET", null, conToken, qpRef.current)
        .then((r) => {
          setLoading(false);
          setData(r);
        })
        .catch((e) => {
          setLoading(false);
          setErrror(e);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, pid, conToken, qpRef.current]);

  return { data, error, loading };
};

export default useFetchData;