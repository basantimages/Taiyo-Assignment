// !Normal loadint the components
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';
import Maps from './pages/Maps';
import { createPortal } from 'react-dom';
import Header from './components/Header/Header';
import Spinner from './components/UI/Spinner';
import { useDispatch } from 'react-redux';
import getData from './components/store/corona-thunk';

// !Lazy loadint the components
const Welcome = lazy(() => import('./pages/Welcome'));
const Contacts = lazy(() => import('./pages/Contacts'));
const ContactForm = lazy(() => import('./components/modals/ContactForm'));
const PopUpAlert = lazy(() => import('./components/modals/PopUpAlert'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //! Getting data from all APIs for map and chart
    dispatch(getData());
    //eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ paddingBottom: '1rem', minHeight: '100vh' }}>
      {/* ! Header and sidebar */}
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* All routes */}
          <Route path='/' element={<Welcome />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/maps' element={<Maps />} />
        </Routes>

        {/* !React portals for overlay */}
        {createPortal(<ContactForm />, document.getElementById('form'))}
        {createPortal(<PopUpAlert />, document.getElementById('alert'))}
      </Suspense>
    </Box>
  );
}

export default App;
