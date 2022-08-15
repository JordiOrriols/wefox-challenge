/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { render, screen } from '@testing-library/react';

import PostListScreen from './post-list';

describe('Post List Screen', (): void => {
    test('renders post list', (): void => {
        render(<PostListScreen />);
        const text = screen.getByText('List');
        expect(text).toBeInTheDocument();
    });
});
