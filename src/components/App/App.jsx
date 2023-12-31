import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { routes } from 'routes';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.COUNTRY} element={<CountrySearch />} />
          <Route path={routes.COUNTRY_ID} element={<Country />} />
        </Route>
      </Routes>
    </>
  );
};
