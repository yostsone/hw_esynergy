import type { Document } from '../types';

export async function fetchAllDocuments(): Promise<Document[]> {
  //TODO: replace with environment urls, remove hardcoded localhost
  const res = await fetch('http://localhost:3000/api/v1/documents');

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const errBody = await res.json();
      message = (errBody && (errBody.error || errBody.message)) ?? message;
    } catch {
      throw new Error('Parse error fetching documents');
    }
    throw new Error(message);
  }

  const body = await res.json().catch(() => []);

  if (body && Array.isArray(body.data)) {
    return body.data as Document[];
  }

  // no usable data found
  throw new Error('Invalid response shape');
}

export async function fetchDocumentById(id: number): Promise<Document | null> {
  //TODO: replace with environment urls, remove hardcoded localhost
  const res = await fetch(`http://localhost:3000/api/v1/document/${id}`);
  if (res.status === 404) return null;

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const errBody = await res.json();
      message = (errBody && (errBody.error || errBody.message)) ?? message;
    } catch {
      throw new Error('Parse error fetching documents');
    }
    throw new Error(message);
  }

  const body = await res.json().catch(() => null);
  if (!body) return null;

  // Expected success envelope
  if (body && body.success && body.data && typeof body.data === 'object') {
    return body.data as Document;
  }

  return null;
}