/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { useContext, useEffect, useState, FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Card } from '../components/card';
import { CardPost } from '../components/card-post';
import { Input } from '../components/input';
import {
    defaultPost,
    DefaultPost,
    Post,
    PostsContext,
} from '../contexts/posts';
import { logger } from '../helpers/logger';

const Container = styled('div')((): any => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'stretch',
    width: '100%',
}));

const LeftForm = styled('div')((): any => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'stretch',
}));

const RightPreview = styled('div')((): any => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'stretch',
}));

const Form = styled('form')((): any => ({
    padding: '30px 0',
}));

const Title = styled('h2')((): any => ({
    width: '100%',
    textAlign: 'center',
}));

const PostEditScreen: FC = (): ReactElement => {
    const postsContext = useContext(PostsContext);
    const [post, setPost] = useState<DefaultPost>(defaultPost);

    const params = useParams();

    useEffect((): void => {
        if (params.id !== undefined) {
            const currentPostID = parseInt(params.id, undefined);
            const currentPost = postsContext.posts?.find(
                (p: Post): boolean => p.id === currentPostID
            );
            if (currentPost) setPost(currentPost);
        }
    }, [params.id, postsContext.posts]);

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const id = event.target.id;
        const value = event.target.value;

        const validIdList = ['title', 'content', 'image_url', 'lat', 'long'];

        if (validIdList.indexOf(id) !== -1) setPost({ ...post, [id]: value });
    };

    const onSubmit = (): void => {
        logger.log('Submit');
    };

    return (
        <Container>
            <LeftForm>
                <Title>Edit Post</Title>
                <Card>
                    <Form onSubmit={onSubmit}>
                        <Input
                            id="title"
                            label="Title"
                            value={post.title}
                            onChange={onInputChange}
                        />
                        <Input
                            id="content"
                            label="Content"
                            value={post.content}
                            onChange={onInputChange}
                        />
                        <Input
                            id="image_url"
                            label="Image Url"
                            value={post.image_url}
                            onChange={onInputChange}
                        />
                        <Input
                            id="lat"
                            label="Latitude"
                            value={post.lat}
                            onChange={onInputChange}
                        />
                        <Input
                            id="long"
                            label="Longitude"
                            value={post.long}
                            onChange={onInputChange}
                        />
                    </Form>
                </Card>
            </LeftForm>

            <RightPreview>
                <Title>Preview</Title>
                <CardPost
                    post={{ ...post, id: 0, created_at: '', updated_at: '' }}
                />
            </RightPreview>
        </Container>
    );
};

export default PostEditScreen;
