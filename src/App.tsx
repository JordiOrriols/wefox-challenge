/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Post, PostsContext } from './contexts/posts';
import src from './logo.svg';
import { Navigator } from './navigator';

const AppContainer = styled('div')((): any => ({
    width: '100%',
    flexGrow: 1,
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch',
}));

const AppHeader = styled('header')((): any => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
}));

const AppLogo = styled('img')((): any => ({
    height: '50px',
    pointerEvents: 'none',
    opacity: 0.1,
}));

const AppContent = styled('div')((): any => ({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'stretch',
    padding: '20px',
}));

const AppFooter = styled('footer')((): any => ({
    textAlign: 'center',
    padding: '20px',
}));

function App(): React.ReactElement {
    const [posts, setPosts] = useState<Post[]>();

    useEffect((): void => {
        fetch('http://localhost:3000/api/v1/posts')
            .then(async (response: Response): Promise<void> => {
                const postsArray: any = (await response.json()) as any;

                // Validate Input from API

                setPosts(postsArray);
            })
            .catch((_error: any): void => {
                // console.error(error)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PostsContext.Provider value={{ posts }}>
            <AppContainer>
                <AppHeader>
                    <AppLogo src={src} alt="logo" />
                </AppHeader>
                <AppContent>
                    <Navigator />
                </AppContent>

                <AppFooter>Jordi Orriols</AppFooter>
            </AppContainer>
        </PostsContext.Provider>
    );
}

export default App;
