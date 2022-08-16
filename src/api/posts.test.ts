/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { Post } from '../contexts/posts';
import { magicNumber } from '../helpers/numbers';

import { getPosts } from './posts';

describe('settings', (): void => {
    it('api should return setting object', async (): Promise<void> => {
        expect.assertions(magicNumber.two);

        const posts: Post[] = [
            {
                id: 0,
                created_at: 'created_at',
                updated_at: 'updated_at',
                content: 'Content',
                image_url: 'https://www.google.com/logo.png',
                lat: '15.00',
                long: '10.01',
                title: 'Title',
            },
        ];
        const fetchMock: any = async (): Promise<any> => ({
            ok: true,
            json: (): Promise<any> => Promise.resolve(posts),
        });

        jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

        const result: Post[] = await getPosts();

        expect(result).toStrictEqual(posts);
        expect(result[magicNumber.zero]).toStrictEqual(posts[magicNumber.zero]);
    });
});
