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
import { colors } from '../helpers/colors';

interface Props {
    post: Post;
    preview?: boolean;
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
    color: colors.gray,
}));

const PostDescription = styled('p')((): any => ({
    textAlign: 'justify',
    textJustify: 'inter-word',
    marginBottom: '30px',
}));

const PostSeeMore = styled('a')((): any => ({
    textAlign: 'right',
    color: colors.blue,
}));

export const CardPost: FC<Props> = (props: Props): ReactElement => {
    const { post } = props;

    const onImageError: React.ReactEventHandler<HTMLImageElement> = (
        event: React.SyntheticEvent<HTMLImageElement>
    ): void => {
        event.currentTarget.onerror = null; // prevents looping
        event.currentTarget.src =
            'https://previews.123rf.com/images/ominaesi/ominaesi1701/ominaesi170100010/68761420-silueta-inconsútil-urban-landscape-city-real-estate-summer-day-fondo-plano-diseño-concepto-icono-pla.jpg';
    };

    return (
        <Card>
            <>
                <PostImage src={post.image_url} onError={onImageError} />
                <PostContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostDescription>{post.content}</PostDescription>

                    {!props.preview ? (
                        <PostSeeMore href={`/edit/${post.id}`}>
                            Edit post
                        </PostSeeMore>
                    ) : (
                        'Edit post'
                    )}
                </PostContent>
            </>
        </Card>
    );
};
