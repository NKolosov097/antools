import './App.css';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { MostPopularTools } from './components/mostPopularTools/MostPopularTools';
import { Brands } from './components/brands/Brands';
import { NewcomerTools } from './components/newcomerTools/NewcomerTools';
import { Footer } from './components/footer/Footer';
import { Contributor } from './components/contributor/Contributor';
import { Staff } from './components/staff/Staff';

const Wrapper = styled.section`
  justify-content: center;
  align-items: center;
  color: #fff;

  max-width: 1000px;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <MostPopularTools />
      <Brands />
      <NewcomerTools />
      <Staff />
      <Contributor />
      <Footer />
    </Wrapper>
  );
};
