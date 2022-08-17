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
    styleColor: 'primary' | 'secondary' | 'red';
    type?: 'button' | 'submit' | 'reset';
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface StyledButtonTheme {
    background: string;
    hover: string;
}

interface StyledButtonProps {
    theme: StyledButtonTheme;
}

const StyledButton = styled('button')((props: StyledButtonProps): any => ({
    margin: 0,
    border: 'none',
    color: 'white',
    padding: '10px 40px',
    background: props.theme.background,
    '&:hover': {
        background: props.theme.hover,
    },
}));

export const Button: FC<Props> = (props: Props): ReactElement => {
    const backgroundColors = {
        primary: colors.blue,
        secondary: colors.gray,
        red: colors.darkRed,
    };

    const hoverColors = {
        primary: colors.darkBlue,
        secondary: colors.darkGray,
        red: colors.red,
    };

    const theme = {
        background: backgroundColors[props.styleColor],
        hover: hoverColors[props.styleColor],
    };

    return (
        <StyledButton theme={theme} type={props.type} onClick={props.onClick}>
            {props.label}
        </StyledButton>
    );
};
