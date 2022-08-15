/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { Card } from '../components/card';
import { Post } from '../contexts/posts';

interface Props {
    post: Post;
}

const PostImage = styled('img')((): any => ({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
}));

const PostContent = styled('div')((): any => ({
    padding: '10px 30px 50px 30px',
}));

const PostTitle = styled('h2')((): any => ({
    fontWeight: '300',
    color: ' #484849',
}));

const PostDescription = styled('p')((): any => ({
    textAlign: 'justify',
    textJustify: 'inter-word',
    marginBottom: '30px',
}));

const PostSeeMore = styled('a')((): any => ({
    textAlign: 'right',
    color: '#3498db',
}));

export const CardPost: FC<Props> = (props: Props): ReactElement => {
    const { post } = props;

    return (
        <Card>
            <>
                <PostImage src={post.image_url} />
                <PostContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostDescription>{post.content}</PostDescription>
                    <PostSeeMore href={`/edit/${post.id}`}>
                        Edit post
                    </PostSeeMore>
                </PostContent>
            </>
        </Card>
    );
};
