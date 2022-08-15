/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { render, screen } from '@testing-library/react';
import PostEditScreen from './post-edit';

describe('Post Edit Screen', (): void => {
    test('renders post edit', (): void => {
        render(<PostEditScreen />);
        const text = screen.getByText('Edit');
        expect(text).toBeInTheDocument();
    });
});
