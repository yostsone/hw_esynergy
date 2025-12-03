import { Routes, Route } from 'react-router-dom';
import DocumentList from './components/Documents/DocumentList';
import DocumentPreview from './components/DocumentAction/DocumentPreview';
import DocumentCreate from './components/DocumentAction/DocumentCreate';

function App() {
  return (
    <main className="min-h-screen flex items-start justify-center py-8">
      <Routes>
        <Route path="/" element={ <DocumentList />} />
        <Route path="/document/:id" element={<DocumentPreview />} />
        <Route path="/document/create" element={<DocumentCreate />} />
      </Routes>
    </main>
  )
}

export default App
