/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { PostsContext } from './posts';

describe('posts context', (): void => {
    it('should be truthy', (): void => {
        expect.assertions(1);

        expect(PostsContext).toBeTruthy();
    });
});
