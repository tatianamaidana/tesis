import { useEffect, useContext } from "react";
import { DataContext } from "./DataProvider";
import { useLocation } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

export default function DataProcessor() {
  const {
    data,
    setData,
    endpointFinal,
    pasarPagina,
    hayMasContenidos,
    setHayMasContenidos,
    setLoadingMore,
    setError,
    setLoading,
    setTotalCount,
    setPartialCount,
    setPid,
    reseting,
    waitForQP,
    qpReady,
    setQPReady,
    qp,
  } = useContext(DataContext);

  useEffect(() => {
    if (!qpReady) {
      if (qp && waitForQP) {
        setQPReady(true);
      }
      if (!qp && !waitForQP) {
        setQPReady(true);
      }
    }
  }, [qp, setQPReady, waitForQP, qpReady]);

  const { data: chunkData, error: dataError } = useFetchData(
    qpReady && endpointFinal && !reseting ? endpointFinal : null,
    qp
  );

  const location = useLocation();

  useEffect(() => {
    if (
      !location.pathname.includes("agregar") &&
      !location.pathname.includes("editar")
    ) {
      setPid((prev) => (prev += 1));
      setData();
    }
    // eslint-disable-next-line
  }, [location, setData]);

  useEffect(() => {
    if (chunkData) {
      setTotalCount(chunkData.count);
      setPartialCount((prev) => prev + chunkData.results?.length || 0);
      if (chunkData.next) {
        setHayMasContenidos(true);
        pasarPagina();
      } else {
        setHayMasContenidos(false);
      }
      if (chunkData.results?.length) {
        setData((contenidos) =>
          contenidos
            ? [...contenidos, ...chunkData.results]
            : [...chunkData.results]
        );
      } else if (chunkData.results?.length === 0) {
        setData([]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chunkData]);

  useEffect(() => {
    if (data !== null && data !== undefined && !dataError) {
      setLoading(false);
    }

    if (!hayMasContenidos && chunkData) {
      setLoadingMore(false);
    } else {
      setLoadingMore(true);
    }

    if (dataError) {
      setError((prevErrors) =>
        prevErrors ? [...prevErrors, dataError] : [dataError]
      );
    }
  }, [
    data,
    dataError,
    setError,
    setLoadingMore,
    setLoading,
    chunkData,
    hayMasContenidos,
  ]);

  return null;
}