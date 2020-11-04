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
import schema from '../schemas/analyticsResponse.json';

/**
 * Contains constants and functions for a Analytics Response.
 *
 * The structure for a Analytics Response is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       requestEventIdentifier: <string>,
 *       hitUrl: <string>,
 *       headers: {
 *         ETag: <string>,
 *       },
 *       hitHost: <string>,
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.responsecontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.analytics'
 *     ACPExtensionEventName: <string>,
 *     ACPExtensionEventNumber: <integer>,
 *     ACPExtensionEventUniqueIdentifier: <string>,
 *   },
 *   type: 'generic'
 *   vendor: <string>,
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace analyticsResponse
 */

/**
 * Paths for the keys on a Analytics Response
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The ID of the event that this is a response to.<br />Path is `payload.ACPExtensionEventData.requestEventIdentifier`. */
  requestEventId: 'payload.ACPExtensionEventData.requestEventIdentifier',

  /** Query parameter of the data that was passed to Analytics.<br />Path is `payload.ACPExtensionEventData.hitUrl`. */
  hitUrl: 'payload.ACPExtensionEventData.hitUrl',

  /** The headers returned from the request.<br />Path is `payload.ACPExtensionEventData.headers`. */
  hitHeaders: 'payload.ACPExtensionEventData.headers',

  /** The value used to pull the processing information from the Hit Debugger Service.<br />Path is `payload.ACPExtensionEventData.headers.ETag`. */
  ETag: 'payload.ACPExtensionEventData.headers.ETag',

  /** The host url of the service that was hit to pass the data to Analytics.<br />Path is `payload.ACPExtensionEventData.hitHost`. */
  hitHost: 'payload.ACPExtensionEventData.hitHost',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** The name of the event.<br />Path is `payload.ACPExtensionEventName`. */
  eventName: 'payload.ACPExtensionEventName',

  /** The event number generated by the SDK.<br />Path is `payload.ACPExtensionEventNumber`. */
  sdkEventNumber: 'payload.ACPExtensionEventNumber',

  /** The unique event id.<br />Path is `payload.ACPExtensionEventUniqueIdentifier`. */
  eventId: 'payload.ACPExtensionEventUniqueIdentifier',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
  vendor: 'vendor',

  /** Array of Annotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** When the event occurred.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** Uniquely identifies each event.<br />Path is `uuid`. */
  rootId: 'uuid'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 2;

/**
 * A label that can be used when describing this object
 */
const label = 'Analytics Response';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `eventSource` for a Analytics Response.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.responsecontent';

/**
 * The value for `eventType` for a Analytics Response.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.analytics';

/**
 * The value for `rootType` for a Analytics Response.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'generic';

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
 * Returns the `requestEventId` from the Analytics Response.
 * This is the the ID of the event that this is a response to.
 *
 * Path is `payload,ACPExtensionEventData,requestEventIdentifier`.
 *
 * @function
 * @param {object} source The Analytics Response instance
 * @returns {string}
 */
const getRequestEventId = kit.search(path.requestEventId);

/**
 * Returns the `hitUrl` from the Analytics Response.
 * This is the query parameter of the data that was passed to Analytics.
 *
 * Path is `payload,ACPExtensionEventData,hitUrl`.
 *
 * @function
 * @param {object} source The Analytics Response instance
 * @returns {string}
 */
const getHitUrl = kit.search(path.hitUrl);

/**
 * Returns the `hitHeaders` from the Analytics Response.
 * This is the the headers returned from the request.
 *
 * Path is `payload,ACPExtensionEventData,headers`.
 *
 * @function
 * @param {object} source The Analytics Response instance
 * @returns {object}
 */
const getHitHeaders = kit.search(path.hitHeaders);

/**
 * Returns the data using the specified path from the hitHeaders
 * of the Analytics Response.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Analytics Response instance
 * @returns {*}
 */
const getHitHeadersKey = kit.curry(
  (searchPath, source) => kit.search(`${path.hitHeaders}.${searchPath}`, source)
);

/**
 * Returns the `ETag` from the Analytics Response.
 * This is the the value used to pull the processing information from the Hit Debugger Service.
 *
 * Path is `payload,ACPExtensionEventData,headers,ETag`.
 *
 * @function
 * @param {object} source The Analytics Response instance
 * @returns {string}
 */
const getETag = kit.search(path.ETag);

/**
 * Returns the `hitHost` from the Analytics Response.
 * This is the the host url of the service that was hit to pass the data to Analytics.
 *
 * Path is `payload,ACPExtensionEventData,hitHost`.
 *
 * @function
 * @param {object} source The Analytics Response instance
 * @returns {string}
 */
const getHitHost = kit.search(path.hitHost);

/**
 * Matcher can be used to find matching Analytics Response objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource==`com.adobe.eventsource.responsecontent`',
  'payload.ACPExtensionEventType==`com.adobe.eventtype.analytics`',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Analytics Response event.
 *
 * @function
 * @param {object} source The Analytics Response instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);
/**
 * Generates a Analytics Response with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.analytics',
  rootType: 'generic',
  ...input
});

/**
 * Generates a Analytics Response with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  requestEventId: 'abc-efg',
  hitUrl: 'ndh=1&c.&a.&AppID=TestApp-Swift&DayOfWeek=5',
  ETag: 'qwerty-asdfgh',
  hitHost: 'https://testorg.sc.omtrdc.net/b/ss/mobile5griffon.analytics.debug/0/OIP-2.3.0-2.7.1/s',
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'com.adobe.eventtype.analytics',
  rootType: 'generic',
  vendor: 'com.adobe.mobile.sdk',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
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
  getRequestEventId,
  getHitUrl,
  getHitHeaders,
  getHitHeadersKey,
  getETag,
  getHitHost,
  isMatch,
  matcher,
  EVENT_SOURCE,
  EVENT_TYPE,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
