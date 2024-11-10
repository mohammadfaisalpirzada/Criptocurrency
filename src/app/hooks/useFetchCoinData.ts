import { useState, useEffect } from 'react';

interface CryptoData {
  success: boolean;
  timestamp: number;
  rates: { [key: string]: number };
}

export const useFetchCoinData = (apiKey: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CryptoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coinlayer.com/live?access_key=${apiKey}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        if (jsonData.success === false) {
          throw new Error(jsonData.error.info || 'API Error');
        }

        setData(jsonData);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
        console.error("Error fetching coin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [apiKey]);

  return { loading, data, error };
};
