/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import { getPosts } from './api/posts';
import { Post, PostsContext } from './contexts/posts';
import { logger } from './helpers/logger';
import { magicNumber } from './helpers/numbers';
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

const AppLogo = styled('svg')((): any => ({
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

    const refresh = (): void => {
        getPosts()
            .then((postsArray: Post[]): void => {
                setPosts(postsArray);
            })
            .catch((error: any): void => {
                logger.error(`${error}`);
                toast.error('Not possible to load Posts!');
            });
    };

    useEffect((): void => {
        refresh();
    }, []);

    return (
        <PostsContext.Provider value={{ posts, refresh }}>
            <AppContainer>
                <AppHeader>
                    <AppLogo
                        version="1.1"
                        id="Logos"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 968 576"
                    >
                        <path
                            id="XMLID_13_"
                            d="M724.8,77h-91.6c-3,0-5.9,1.6-7.4,4.3L482.6,329.5c-3.3,5.7,0.8,12.8,7.4,12.8h91.6
        c3,0,5.9-1.6,7.4-4.3L732.2,89.8C735.5,84.1,731.4,77,724.8,77z"
                        />
                        <path
                            id="XMLID_11_"
                            d="M881.1,77h-91.6c-3,0-5.9,1.6-7.4,4.3L638.9,329.5c-3.3,5.7,0.8,12.8,7.4,12.8h91.6
        c3,0,5.9-1.6,7.4-4.3L888.5,89.8C891.8,84.1,887.7,77,881.1,77z"
                        />
                        <path
                            id="XMLID_9_"
                            d="M290.1,288.6h-91.6c-3,0-5.9,1.6-7.4,4.3L79.5,486.2c-3.3,5.7,0.8,12.8,7.4,12.8h91.6
        c3,0,5.9-1.6,7.4-4.3l111.7-193.4C300.8,295.6,296.7,288.6,290.1,288.6z"
                        />
                        <path
                            id="XMLID_8_"
                            d="M568.5,77h-91.6c-3,0-5.9,1.6-7.4,4.3L235.8,486.2c-3.3,5.7,0.8,12.8,7.4,12.8h91.6
        c3,0,5.9-1.6,7.4-4.3L575.9,89.8C579.2,84.1,575.1,77,568.5,77z"
                        />
                    </AppLogo>
                </AppHeader>
                <AppContent>
                    <Navigator />
                </AppContent>

                <AppFooter>Jordi Orriols</AppFooter>

                <ToastContainer
                    position="bottom-left"
                    autoClose={magicNumber.thousand * magicNumber.five}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={true}
                    draggable={true}
                    pauseOnHover={true}
                    theme={'colored'}
                />
            </AppContainer>
        </PostsContext.Provider>
    );
}

export default App;
