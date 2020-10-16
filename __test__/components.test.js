// import React from 'react';
// import { render, waitFor, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from '../App';

// describe('app', () => {

//   it('loads the home page', async () => {
//     render(<App />);
//     fireEvent.click(screen.getByTestId('home'));
//     const doc = screen.getAllByRole('button');
//     expect(doc[0]).toHaveTextContent('GET');
//     expect(doc[1]).toHaveTextContent('POST');
//     expect(doc[2]).toHaveTextContent('PUT');
//     expect(doc[3]).toHaveTextContent('PATCH');
//     expect(doc[4]).toHaveTextContent('DELETE');
//     expect(doc[5]).toHaveTextContent('Submit');
//   });

//   it('loads the list page using the history router', async () => {
//     render(<App />);
//     fireEvent.click(screen.getByTestId('history'));
//     const list = screen.getAllByRole('list');
//     expect(list[0]).toHaveTextContent('HomeHistoryHelp');
//   });

//   it('loads the list page using the help router', async () => {
//     render(<App />);
//     fireEvent.click(screen.getByTestId('help'));
//     const list = screen.getAllByRole('list');
//     expect(list[0]).toHaveTextContent('HomeHistoryHelp');
//   });

// });