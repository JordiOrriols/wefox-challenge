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
    id: string;
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    error?: boolean;
}

interface StyledInputTheme {
    error: boolean;
}

interface StyledInputProps {
    theme: StyledInputTheme;
}

const Container = styled('div')((): any => ({
    width: '100%',
    padding: '15px 0',
    boxSizing: 'border-box',
}));

const Label = styled('label')((): any => ({
    width: '100%',
    paddingBottom: '10px',
}));

const StyledInput = styled('input')((props: StyledInputProps): any => ({
    width: '100%',
    height: '25px',
    border: 'none',
    borderBottom: `2px solid ${props.theme.error ? colors.red : colors.gray}`,
    '&:focus': {
        outline: 'none',
        borderBottomColor: props.theme.error ? colors.red : colors.blue,
    },
}));

const Error = styled('div')((): any => ({
    color: colors.red,
    fontSize: '12px',
    marginTop: '10px',
}));

export const Input: FC<Props> = (props: Props): ReactElement => {
    const theme = {
        error: props.error,
    };

    return (
        <Container>
            <Label>
                {props.label}
                <StyledInput
                    type="text"
                    name={props.id}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    theme={theme}
                />
                {props.error ? <Error>This field is required</Error> : null}
            </Label>
        </Container>
    );
};
