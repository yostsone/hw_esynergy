import { useCallback, useEffect, useState } from 'react';
import { fetchAllDocuments } from '../services/documentService';
import type { Document } from '../types';

type UseDocumentsReturnType = {
  data: Document[] | null;
  loading: boolean;
  error: Error | null;
};

export function useDocuments(): UseDocumentsReturnType {
  const [data, setData] = useState<Document[] | []>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const initLoad = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const docs = await fetchAllDocuments();
      setData(docs);
    } catch (err) {
      setError(err as Error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // initial load on mount
  useEffect(() => {
    void initLoad();
  }, [initLoad]);

  return {
    data,
    loading,
    error,
  };
}