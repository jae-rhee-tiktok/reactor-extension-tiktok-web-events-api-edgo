/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Content, ContextualHelp, Heading, Link } from '@adobe/react-spectrum';
import WrappedComboBoxField from '../../components/wrappedComboBox';
import eventNames from '../../utils/eventNames';

export default () => [
  [
    'event',
    'Event Name',
    '[For web, app, offline, and CRM events] Conversion event name.',
    true,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web, app, offline, and CRM events.</strong>
        </p>
        <p>
          <ul>
            <li>
              For web and app events, it can be either a Standard Event or
              Custom Event.
            </li>
            <li>For offline events, it can only be a Standard Event.</li>
            <li>For CRM events, it can only be a Custom Event.</li>
          </ul>
        </p>
        <p>
          To find out the supported values for Standard Events, refer to{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1771101186666498"
              rel="noreferrer"
              target="_blank"
            >
              Events API 2.0-Supported events
            </a>
          </Link>
          .
        </p>
        <p>
          To report a Custom Web Event or Custom App Event, pass a customized
          name in this field.
        </p>
        <p>
          Do not use sensitive words in the name of Custom Events. Otherwise,
          the responsibility for any consequences that may arise will be borne
          by you.
        </p>
      </Content>
    </ContextualHelp>,
    WrappedComboBoxField,
    {
      defaultItems: eventNames.map((q) => ({ id: q, name: q })),
      allowsCustomValue: true,
      minWidth: 'size-4600',
      width: 'size-4600'
    }
  ],
  [
    'timestamp',
    'Event Time',
    '[For web, app, offline, and CRM events] ISO 8601 format OR Unix timestamp that the event ' +
      'took place.',
    true,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web, app, offline, and CRM events.</strong>
        </p>
        <p>
          Note that if timestamp is not provided, the time when TikTok receives
          the event via the server will be used.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'eventId',
    'Event ID',
    '[For web, offline, and CRM events] The ID that is used to identify a unique event. ' +
      'It can be hashed or unhashed.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web, offline, and CRM events.</strong>
        </p>
        <p>Required in any of the following scenarios:</p>
        <p>
          <ul>
            <li>
              You are sending web events (<code>event_source</code> ={' '}
              <code>web</code>) from both TikTok browser pixel and Events API.
            </li>
            <li>
              You are sending CRM events (<code>event_source</code> ={' '}
              <code>crm</code>) from both Events API and by uploading CSV files
              on Events Manager.
            </li>
          </ul>
        </p>
        <p>
          TikTok uses the <code>event_source_id</code>, <code>event_id</code>{' '}
          and <code>event</code> to deduplicate the same event sent multiple
          times from a single channel or across multiple channels (for instance
          browser pixel and Events API).
        </p>
        <p>
          For more information on event deduplication and how to complete the
          setup, refer to{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1771100965992450"
              rel="noreferrer"
              target="_blank"
            >
              Events API 2.0 - Event Deduplication
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'ldu',
    'Limited Data Use',
    '[For web and app events] Flag events for limited data processing.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web and app events.</strong>
        </p>
        <p>
          In order to help facilitate advertiser&apos;s compliance with the
          right to opt-out of sale and sharing of personal data under certain
          U.S. state privacy laws, TikTok offers a Limited Data Use
          (&quot;LDU&quot;) feature. LDU for the Pixel and Events API helps give
          businesses more control over how their event data is used in
          TikTok&apos;s systems. The feature will be available in California,
          Virginia, Colorado, Connecticut, and Utah.
        </p>
        <p>
          Businesses should consult with their legal advisors on how to use
          TikTok&apos;s products in compliance with applicable laws. For details
          on new state data protection laws, please see our updated{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/i18n/official/article?aid=10015015"
              rel="noreferrer"
              target="_blank"
            >
              jurisdictional terms
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ]
];
