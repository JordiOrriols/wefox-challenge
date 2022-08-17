/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

let currentLogNumber = 0;

// On this Logger we can include a service like SENTRY in order to save all logs and sessions on the cloud for production debugging.

export const logger = {
    log: (message: string, optionalParams?: any): void => {
        const numMessage = `${currentLogNumber++}: ${message}`;
        // tslint:disable-next-line: no-console
        if (optionalParams) console.log('%s', numMessage, optionalParams);
        // tslint:disable-next-line: no-console
        else console.log('%s', numMessage);
    },
    info: (message: string, optionalParams?: any): void => {
        const numMessage = `${currentLogNumber++}: ${message}`;

        // tslint:disable-next-line: no-console
        if (optionalParams) console.info('%s', numMessage, optionalParams);
        // tslint:disable-next-line: no-console
        else console.info('%s', numMessage);
    },
    warn: (message: string, optionalParams?: any): void => {
        const numMessage = `${currentLogNumber++}: ${message}`;

        // tslint:disable-next-line: no-console
        if (optionalParams) console.warn('%s', numMessage, optionalParams);
        // tslint:disable-next-line: no-console
        else console.warn('%s', numMessage);
    },
    error: (message: string, optionalParams?: any): void => {
        const numMessage = `${currentLogNumber++}: ${message}`;

        // tslint:disable-next-line: no-console
        if (optionalParams) console.error('%s', numMessage, optionalParams);
        // tslint:disable-next-line: no-console
        else console.error('%s', numMessage);
    },
    exception: (error: Error): void => {
        const numMessage = `${currentLogNumber++}:`;

        // tslint:disable-next-line: no-console
        console.error('%s', numMessage, error);
    },
};
