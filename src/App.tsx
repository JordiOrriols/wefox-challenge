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
    width: '100%',
    flexGrow: 1,
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch'
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
    alignItems: 'stretch',
    alignContent: 'stretch',
    textAlign: 'center',
    padding: '20px',
}));

const AppFooter = styled('footer')((): any => ({
    textAlign: 'center',
    padding: '20px',
}));

function App(): React.ReactElement {
    return (
        <AppContainer>
            <AppHeader>
                <AppLogo src={src} alt="logo" />
            </AppHeader>
            <AppContent>
                <Navigator />
            </AppContent>

            <AppFooter>Jordi Orriols</AppFooter>
        </AppContainer>
    );
}

export default App;
