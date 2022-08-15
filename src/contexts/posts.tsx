/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React from 'react';

export interface Post {
    content: string;
    created_at: string;
    id: number;
    image_url: string;
    lat: string;
    long: string;
    title: string;
    updated_at: string;
}

type PostsContextType = {
    posts?: Post[];
};

export const PostsContext: React.Context<PostsContextType> =
    React.createContext<PostsContextType>({});
