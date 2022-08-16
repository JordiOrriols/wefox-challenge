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

const StyledInput = styled('input')((): any => ({
    width: '100%',
    height: '25px',
    border: 'none',
    borderBottom: `2px solid ${colors.gray}`,
    '&:focus': {
        outline: 'none',
        borderBottomColor: colors.blue,
    },
}));

export const Input: FC<Props> = (props: Props): ReactElement => {
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
                />
            </Label>
        </Container>
    );
};
