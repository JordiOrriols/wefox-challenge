/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { render, screen } from '@testing-library/react';

import { Card } from './card';

describe('Post Edit Screen', (): void => {
    test('renders post edit', (): void => {
        const cardContent = 'Card Children';

        render(
            <Card>
                <>{cardContent}</>
            </Card>
        );
        const text = screen.getByText(cardContent);
        expect(text).toBeInTheDocument();
    });
});
