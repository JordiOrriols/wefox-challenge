/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', (): void => {
    test('renders app frame', (): void => {
        render(<App />);
        const text = screen.getByText('Jordi Orriols');
        expect(text).toBeInTheDocument();
    });
});
