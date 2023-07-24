
import NavBar from './../../src/components/shared/NavBar';
import { MemoryRouter } from 'react-router-dom';
import './../../src/assets/scss/main.scss';

describe('NavBar.cy.tsx', () => {
  it('Navbar Works As Supposed To Be', () => {
    cy.mount(<MemoryRouter><NavBar /></MemoryRouter>)
  })
})