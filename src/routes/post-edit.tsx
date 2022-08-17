/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { useContext, useEffect, useState, FC, ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { addPost, deletePost, updatePost } from '../api/posts';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { CardPost } from '../components/card-post';
import { Input } from '../components/input';
import {
    defaultPost,
    DefaultPost,
    Post,
    PostsContext,
} from '../contexts/posts';
import { colors } from '../helpers/colors';
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
    padding: '30px 50px',
}));

const Title = styled('h2')((): any => ({
    width: '100%',
    textAlign: 'center',
}));

const CreateNewPost = styled('a')((): any => ({
    textAlign: 'right',
    color: colors.blue,
}));

const ButtonContainer = styled('div')((): any => ({
    margin: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    alignContent: 'stretch',
}));

const PostEditScreen: FC = (): ReactElement => {
    const postsContext = useContext(PostsContext);
    const [post, setPost] = useState<DefaultPost>(defaultPost);
    const navigate = useNavigate();

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

    const validateValue = (value: string): boolean => {
        return value.trim().length !== 0;
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        if (validateValue(post.title) && validateValue(post.content)) {
            try {
                const postToSend: DefaultPost = {
                    title: post.title,
                    content: post.content,
                    image_url: post.image_url,
                    lat: post.lat,
                    long: post.long,
                };

                if (params.id !== undefined) {
                    const currentPostID = parseInt(params.id, undefined);
                    await updatePost(currentPostID, postToSend);
                } else {
                    await addPost(postToSend);
                }

                postsContext.refresh();
                navigate('/');
            } catch (error) {
                logger.error(`${error}`);
                toast.error('Not possible to save the current Post!');
            }
        }
    };

    const onDelete = async (): Promise<void> => {
        try {
            if (params.id !== undefined) {
                const currentPostID = parseInt(params.id, undefined);

                await deletePost(currentPostID);
            }

            postsContext.refresh();
            navigate('/');
        } catch (error) {
            logger.error(`${error}`);
            toast.error('Not possible to delete the current Post!');
        }
    };

    return (
        <Container>
            <LeftForm>
                <Title>
                    {params.id !== undefined ? 'Edit Post' : 'Create Post'}
                </Title>
                <Card>
                    <Form onSubmit={onSubmit}>
                        <Input
                            id="title"
                            label="Title (Required)"
                            value={post.title}
                            onChange={onInputChange}
                            error={!validateValue(post.title)}
                        />
                        <Input
                            id="content"
                            label="Content (Required)"
                            value={post.content}
                            onChange={onInputChange}
                            error={!validateValue(post.content)}
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
                        <ButtonContainer>
                            <Button
                                styleColor={'primary'}
                                type="submit"
                                label="Save"
                            />

                            {params.id !== undefined ? (
                                <Button
                                    styleColor={'red'}
                                    type="button"
                                    label="Delete"
                                    onClick={onDelete}
                                />
                            ) : null}
                        </ButtonContainer>
                    </Form>
                </Card>

                <CreateNewPost href={'/'}>Go Back</CreateNewPost>
            </LeftForm>

            <RightPreview>
                <Title>Preview</Title>
                <CardPost
                    post={{ ...post, id: 0, created_at: '', updated_at: '' }}
                    preview={true}
                />
            </RightPreview>
        </Container>
    );
};

export default PostEditScreen;
