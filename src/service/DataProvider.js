import React, { createContext, useState, useEffect, useCallback } from "react";

export const DataContext = createContext();

export function DataProvider({ endpoint, queryParams = null, ...rest }) {
  const [data, setData] = useState();
  const [localData, setLocalData] = useState();
  const [endpointFinal, setEndpointFinal] = useState();
  const [pagina, setPagina] = useState(0);
  const [hayMasContenidos, setHayMasContenidos] = useState(true);
  const [loadingMore, setLoadingMore] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [partialCount, setPartialCount] = useState(0);
  const [pid, setPid] = useState(1);
  const [waitForQP, setWaitForQP] = useState(false);
  const [qpReady, setQPReady] = useState(false);
  const [qp, setQp] = useState();

  // useEffect(() => {
  //   console.log({
  //     data,
  //     localData,
  //     endpointFinal,
  //     pagina,
  //     hayMasContenidos,
  //     loadingMore,
  //     error,
  //     loading,
  //     totalCount,
  //     partialCount,
  //     pid,
  //     waitForQP,
  //     qpReady,
  //     qp,
  //   });
  // }, [
  //   data,
  //   endpointFinal,
  //   error,
  //   hayMasContenidos,
  //   loading,
  //   loadingMore,
  //   localData,
  //   pagina,
  //   partialCount,
  //   pid,
  //   qp,
  //   qpReady,
  //   totalCount,
  //   waitForQP,
  // ]);

  // Seteamos como queda definitivamente el endpoint dependiendo de si es paginado
  useEffect(() => {
    if (endpoint && pagina !== 0) {
      setEndpointFinal(
        `${endpoint}${
          endpoint.includes("?") ? "&" : endpoint.endsWith("/") ? "?" : "/?"
        }page=${pagina}`
      );
    }
  }, [endpoint, pagina, pid]);

  const pasarPagina = () => {
    setPagina((prevPage) => (prevPage += 1));
  };

  const reset = useCallback((queryParams) => {
    // console.log("REset called", queryParams);
    setData();
    setPagina(1);
    setHayMasContenidos(true);
    setLoadingMore(true);
    setError(false);
    setLoading(true);
    setTotalCount(0);
    setPartialCount(0);
    setPid((prev) => prev + 1);
    setQp(queryParams);
    setQPReady(true);
    setWaitForQP(queryParams ? true : false);
  }, []);

  useEffect(() => {
    reset(queryParams);
  }, [queryParams, reset]);

  return (
    <DataContext.Provider
      value={{
        pid,
        qp,
        setQp,
        waitForQP,
        setWaitForQP,
        qpReady,
        setQPReady,
        queryParams,
        setPid,
        data: data,
        localData,
        setLocalData,
        setData: setData,
        endpointFinal: endpointFinal,
        pagina: pagina,
        pasarPagina: pasarPagina,
        hayMasContenidos: hayMasContenidos,
        setHayMasContenidos: setHayMasContenidos,
        loadingMore: loadingMore,
        setLoadingMore: setLoadingMore,
        error: error,
        setError: setError,
        loading: loading,
        setLoading: setLoading,
        totalCount,
        setTotalCount,
        partialCount,
        setPartialCount,
      }}
    >
      {rest.children}
    </DataContext.Provider>
  );
}