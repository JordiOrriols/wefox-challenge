/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React from 'react';
import styled from 'styled-components';

import src from './logo.svg';
import { Navigator } from './navigator';

const AppContainer = styled('div')((): any => ({
    textAlign: 'center',
    margin: '30px',
}));

const AppLogo = styled('img')((): any => ({
    height: '50px',
    pointerEvents: 'none',
}));

const AppHeader = styled('header')((): any => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

function App(): React.ReactElement {
    return (
        <AppContainer>
            <AppHeader className="App-header">
                <AppLogo src={src} className="App-logo" alt="logo" />
            </AppHeader>

            <Navigator />

            <footer>Jordi Orriols</footer>
        </AppContainer>
    );
}

export default App;
