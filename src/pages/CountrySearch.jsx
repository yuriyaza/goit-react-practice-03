import { Container, SearchForm, Section, CountryList } from 'components';
import { useFetchSearchCountry } from 'hooks/useFetchSearchCountry';

export const CountrySearch = () => {
  const { countries, handleSubmit } = useFetchSearchCountry();

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
