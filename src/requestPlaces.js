
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

import kit from './kit';
import schema from '../schemas/requestPlaces.json';

/**
 * Contains constants and functions for a Request Places Event.
 *
 * The structure for a Request Places Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: {
 *       count: <number>,
 *       latitude: <number>,
 *       longitude: <number>,
 *       requesttype: 'requestgetnearbyplaces'
 *     },
 *     ACPExtensionEventSource: 'com.adobe.eventsource.requestcontent'
 *     ACPExtensionEventType: 'com.adobe.eventtype.places'
 *     ACPExtensionEventName: <string>,
 *     ACPExtensionEventUniqueIdentifier: <string>,
 *   },
 *   vendor: <string>,
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   type: <enum(blob, control, generic, log, status)>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace requestPlaces
 */

/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

/**
 * Paths for the keys on a Request Places Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  data: 'payload.ACPExtensionEventData',

  /** The number of POIs to return.<br />Path is `payload.ACPExtensionEventData.count`. */
  count: 'payload.ACPExtensionEventData.count',

  /** The latitude to search from.<br />Path is `payload.ACPExtensionEventData.latitude`. */
  latitude: 'payload.ACPExtensionEventData.latitude',

  /** The longitude to search from.<br />Path is `payload.ACPExtensionEventData.longitude`. */
  longitude: 'payload.ACPExtensionEventData.longitude',

  /** The type of request we are making.<br />Path is `payload.ACPExtensionEventData.requesttype`. */
  requestType: 'payload.ACPExtensionEventData.requesttype',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** The name of the event.<br />Path is `payload.ACPExtensionEventName`. */
  eventName: 'payload.ACPExtensionEventName',

  /** The unique event id.<br />Path is `payload.ACPExtensionEventUniqueIdentifier`. */
  eventId: 'payload.ACPExtensionEventUniqueIdentifier',

  /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
  vendor: 'vendor',

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
const parentDepth = 3;

/**
 * A label that can be used when describing this object
 */
const label = 'Request Places Event';

/**
 * The value for `requestType` for a Request Places Event.
 *
 * Path is `payload.ACPExtensionEventData.requesttype`.
 *
 * @constant
 */
const REQUEST_TYPE = 'requestgetnearbyplaces';

/**
 * The value for `eventSource` for a Request Places Event.
 *
 * Path is `payload.ACPExtensionEventSource`.
 *
 * @constant
 */
const EVENT_SOURCE = 'com.adobe.eventsource.requestcontent';

/**
 * The value for `eventType` for a Request Places Event.
 *
 * Path is `payload.ACPExtensionEventType`.
 *
 * @constant
 */
const EVENT_TYPE = 'com.adobe.eventtype.places';


/**
 * Returns the `count` from the Request Places Event.
 * This is the the number of POIs to return.
 *
 * Path is `payload.ACPExtensionEventData.count`.
 *
 * @function
 * @param {object} source The Request Places Event instance
 * @returns {number}
 */
const getCount = kit.search(path.count);

/**
 * Returns the `latitude` from the Request Places Event.
 * This is the the latitude to search from.
 *
 * Path is `payload.ACPExtensionEventData.latitude`.
 *
 * @function
 * @param {object} source The Request Places Event instance
 * @returns {number}
 */
const getLatitude = kit.search(path.latitude);

/**
 * Returns the `longitude` from the Request Places Event.
 * This is the the longitude to search from.
 *
 * Path is `payload.ACPExtensionEventData.longitude`.
 *
 * @function
 * @param {object} source The Request Places Event instance
 * @returns {number}
 */
const getLongitude = kit.search(path.longitude);

/**
 * Returns the `requestType` from the Request Places Event.
 * This is the the type of request we are making.
 *
 * Path is `payload.ACPExtensionEventData.requesttype`.
 *
 * @function
 * @param {object} source The Request Places Event instance
 * @returns {string}
 */
const getRequestType = kit.search(path.requestType);

/**
 * Matcher can be used to find matching Request Places Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventData.requesttype==\'requestgetnearbyplaces\'',
  'payload.ACPExtensionEventSource==\'com.adobe.eventsource.requestcontent\'',
  'payload.ACPExtensionEventType==\'com.adobe.eventtype.places\'',
  'clientId',
  'timestamp',
  'type'
]);

/**
 * Tests the provided source against the matcher to see if it's Request Places Event event.
 *
 * @function
 * @param {object} source The Request Places Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);

/**
 * Generates a Request Places Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expand({
  'payload.ACPExtensionEventData.count': 10,
  'payload.ACPExtensionEventData.latitude': 40.4349,
  'payload.ACPExtensionEventData.longitude': -111.891,
  'payload.ACPExtensionEventData.requesttype': 'requestgetnearbyplaces',
  'payload.ACPExtensionEventSource': 'com.adobe.eventsource.requestcontent',
  'payload.ACPExtensionEventType': 'com.adobe.eventtype.places',
  vendor: 'com.adobe.mobile.sdk',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  type: 'generic',
  uuid: '123',
  ...input
});

/**
 * Validates the Request Places Event against the json schema
 *
 * @function
 * @param {object} source The Request Places Event
 * @returns {boolean}
 */
const validate = kit.validateSchema(schema);

export default {
  path,
  mock,
  schema,
  validate,
  ...customExports,
  getCount,
  getLatitude,
  getLongitude,
  getRequestType,
  isMatch,
  matcher,
  REQUEST_TYPE,
  EVENT_SOURCE,
  EVENT_TYPE,
  label,
  parentDepth
};
