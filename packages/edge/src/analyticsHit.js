/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as R from 'ramda';
import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/analyticsHit.json';

/**
 * Contains constants and functions for a Analytics Hit.
 *
 * The structure for a Analytics Hit is as follows:
 * ```
 * {
 *   payload: {
 *     attributes: {
 *       source: 'com.adobe.analytics'
 *       hitId: <string>,
 *     },
 *     name: 'analytics.hit'
 *   },
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: <enum(blob, client, control, generic, log, status)>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace analyticsHit
 */

/**
 * Paths for the keys on a Analytics Hit
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object containing metadata about the request.<br />Path is `payload.attributes`. */
  attributes: 'payload.attributes',

  source: 'payload.attributes.source',

  hitId: 'payload.attributes.hitId',

  name: 'payload.name',

  /** Array of Annotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** When the event occurred.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  /** Uniquely identifies each event.<br />Path is `uuid`. */
  rootId: 'uuid'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 1;

/**
 * A label that can be used when describing this object
 */
const label = 'Analytics Hit';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `source` for a Analytics Hit.
 *
 * Path is `payload,attributes,source`.
 *
 * @constant
 */
const SOURCE = 'com.adobe.analytics';

/**
 * The value for `name` for a Analytics Hit.
 *
 * Path is `payload,name`.
 *
 * @constant
 */
const NAME = 'analytics.hit';

/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = R.curry((alias, data) => kit.search(path[alias] || alias, data));

/**
 * Returns the `attributes` from the Analytics Hit.
 * This is the an object containing metadata about the request.
 *
 * Path is `payload,attributes`.
 *
 * @function
 * @param {object} source The Analytics Hit instance
 * @returns {object}
 */
const getAttributes = kit.search(path.attributes);

/**
 * Returns the data using the specified path from the attributes
 * of the Analytics Hit.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Analytics Hit instance
 * @returns {*}
 */
const getAttributesKey = kit.curry(
  (searchPath, source) => kit.search(`${path.attributes}.${searchPath}`, source)
);

/**
 * Matcher can be used to find matching Analytics Hit objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.attributes.source==\'com.adobe.analytics\'',
  'payload.name==\'analytics.hit\'',
  'timestamp',
  'type'
]);

/**
 * Tests the provided source against the matcher to see if it's Analytics Hit event.
 *
 * @function
 * @param {object} source The Analytics Hit instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Analytics Hit with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  source: 'com.adobe.analytics',
  name: 'analytics.hit',
  ...input
});

/**
 * Generates a Analytics Hit with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  source: 'com.adobe.analytics',
  hitId: '2FC717AB05158000-4023A7954DCA58D7',
  name: 'analytics.hit',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootType: 'generic',
  rootId: '123',
  ...input
});

/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getAttributes,
  getAttributesKey,
  isMatch,
  matcher,
  SOURCE,
  NAME,
  label,
  group,
  parentDepth
};
