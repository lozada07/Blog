import { useEffect, useState } from "react";

const useApiRequest = (requestFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const makeRequest = async (req = null) => {
    setLoading(true);
    const res = await requestFunction(req);
    if (res.error) {
      setError(res.message);
      setTimeout(() => {
        setError(null);
      }, 2000);
      setLoading(false);

      return;
    }
    console.log(res.data);
    setLoading(false);
    setResponse(res.data);

    return res.data;
  };

  return { makeRequest, loading, error, response };
};

export default useApiRequest;
