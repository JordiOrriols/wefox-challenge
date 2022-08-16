/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { Post } from '../contexts/posts';
import { logger } from '../helpers/logger';

import { getFromApi } from './api';

// tslint:disable cyclomatic-complexity
const isPost = (item: unknown): item is Post => {
    return (
        typeof item === 'object' &&
        item !== null &&
        'content' in item &&
        'image_url' in item &&
        'lat' in item &&
        'long' in item &&
        'title' in item &&
        'id' in item &&
        'created_at' in item &&
        'updated_at' in item
    );
};

export const getPosts = async (): Promise<Post[]> => {
    logger.info('API: GetPosts');

    const posts: Post[] = [];
    const response: unknown = await getFromApi('GET', 'posts');

    // Validating Schema from API response

    if (Array.isArray(response)) {
        response.forEach((item: unknown): void => {
            if (isPost(item)) {
                posts.push(item);
            }
        });
    }

    return posts;
};
