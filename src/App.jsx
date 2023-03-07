import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Characters = lazy(() => import('./pages/Characters'));
const CharacterDetails = lazy(() => import('./pages/CharacterDetails'));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
