/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { colors } from '../helpers/colors';

interface Props {
    primary: boolean;
    type?: 'button' | 'submit' | 'reset';
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled('button')((): any => ({
    margin: 0,
    border: 'none',
    color: 'white',
    padding: '10px 40px',
    background: colors.blue,
    '&:hover': {
        background: colors.darkBlue,
    },
}));

export const Button: FC<Props> = (props: Props): ReactElement => {
    return (
        <StyledButton type={props.type} onClick={props.onClick}>
            {props.label}
        </StyledButton>
    );
};
