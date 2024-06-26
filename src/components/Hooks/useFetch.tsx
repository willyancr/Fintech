import React from 'react';

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      try {
        setData(null);
        setError(null);
        setTimeout(async () => {
          setLoading(true);
          try {
            const response = await fetch(url, {
              signal,
              ...optionsRef.current,
            });
            if (!response.ok) throw new Error('Response not ok');
            const json = await response.json();
            if (!signal.aborted) setData(json);
          } catch (error) {
            if (!signal.aborted && error instanceof Error)
              setError(error.message);
          } finally {
            setLoading(false);
          }
        }, 1000);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}

export default useFetch;
