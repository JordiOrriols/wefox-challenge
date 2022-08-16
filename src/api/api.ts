/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import { logger } from '../helpers/logger';

type AllowedMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const getFromApi = async (
    method: AllowedMethods,
    url: string,
    body?: any
): Promise<unknown> => {
    const response: Response = await fetch(
        `http://localhost:3000/api/v1/${url}`,
        { method, body: body ? JSON.stringify(body) : undefined }
    );

    if (!response || !response.ok) {
        logger.error('API: Error on Response', response.status);
        throw new Error(`${response.status}`);
    }

    return response.json();
};
