/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { magicNumber } from '../helpers/numbers';

import { getFromApi } from './api';

describe('api', (): void => {
    describe('getFromApi', (): void => {
        it('handles empty response', (): void => {
            expect.assertions(magicNumber.one);

            const fetchMock: any = async (): Promise<any> => undefined;

            jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

            expect(async (): Promise<void> => {
                await getFromApi('GET', 'posts');
            }).toThrow('Empty response');
        });

        it('handles response error', (): void => {
            expect.assertions(magicNumber.one);

            const errorCode = 500;

            const fetchMock: any = async (): Promise<any> => ({
                ok: false,
                status: errorCode,
            });

            jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

            expect(async (): Promise<void> => {
                await getFromApi('GET', 'posts');
            }).toThrow(`${errorCode}`);
        });

        it('handles wrong response message', (): void => {
            expect.assertions(magicNumber.one);

            const fetchMock: any = async (): Promise<any> => ({
                ok: true,
                json: (): Promise<any> => Promise.reject(),
            });

            jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

            expect(async (): Promise<void> => {
                await getFromApi('GET', 'posts');
            }).toThrow();
        });

        it('handles response message', (): void => {
            expect.assertions(magicNumber.one);

            const fetchMock: any = async (): Promise<any> => ({
                ok: true,
                json: (): Promise<any> => Promise.resolve({}),
            });

            jest.spyOn(global, 'fetch').mockImplementation(fetchMock);

            expect(async (): Promise<void> => {
                await getFromApi('GET', 'posts');
            }).not.toThrow();
        });
    });
});
