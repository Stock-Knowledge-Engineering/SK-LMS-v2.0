import { useState, useEffect } from "react";

export const useMultipartHttp = (data, endpoint) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    if (data && !isSuccess) {
      setLoading(true);
    }
  }, [data]);

  useEffect(() => {
    if (isLoading)
      fetch(`http://localhost:3001${endpoint}`, {
        method: "POST",
        body: data
      })
        .then((res) => {
          try {
            if (res.status == 200) {
              return res.json();
            }
          } catch (err) {
            console.warn(err);
          }
        })
        .then((res) => {
          setSuccess(res);
        });
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) setLoading(false);
  }, [isSuccess]);
  return [isLoading, isSuccess];
};
