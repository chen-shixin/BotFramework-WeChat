/**
 * @module botframework-wechat
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import * as crypto from 'crypto';
import * as util from 'util';

/**
 * Attachment hash
 * @private
 */
export class AttachmentHash {

    /**
     * Calculates the hash value, used to ignore same file when upload media.
     * @param bytes Bytes content need to be hashed.
     * @returns  Hash value.
     */
    computeBytesHash(bytes: Uint8Array): string {
        const result = crypto.createHash('md5').update(bytes).digest('hex');
        return result;
    }

    /**
     * Calculates the hash value, used to ignore same file when upload media.
     * @param content String content need to be hashed.
     * @returns  Hash value.
     */
    computeStringHash(content: string): string {
        const encoder = new util.TextEncoder();
        const bytes = encoder.encode(content);
        return this.computeBytesHash(bytes);
    }
}