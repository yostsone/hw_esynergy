export default function Loader() {
  return (
      <div role="status" aria-label="Loading" className="inline-flex items-center">
      <span
          className="inline-block h-6 w-6 rounded-full animate-spin border-4 border-gray-200 border-t-blue-600"
          aria-hidden="true"
      />
        <span className="sr-only">Loading…</span>
      </div>
  );
}