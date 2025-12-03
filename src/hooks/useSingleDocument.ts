import { useEffect, useState } from 'react';
import { parseStringToPositiveInt } from '../utils/formatHelpers';
import type { Document } from '../types'
import { fetchDocumentById } from '../services/documentService';

type UseDocumentResult = {
  data: Document | null;
  loading: boolean;
  error: Error | null;
};

export function useSingleDocument(id: string): UseDocumentResult {
  const [data, setData] = useState<Document | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const parsedId = parseStringToPositiveInt(id);

  if (parsedId === null) {
    return {
      data: null,
      loading: false,
      error: new Error('Invalid document id'),
    };
  }

  useEffect(() => {
    // reset when no id provided
    if (!parsedId) {
     // requestIdRef.current += 1; // invalidate any previous responses
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    // const currentRequestId = ++requestIdRef.current;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const doc = await fetchDocumentById(parsedId);
        setData(doc);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [parsedId]);

  return { data, loading, error };
}

export default useSingleDocument;