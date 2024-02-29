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
import { Content, ContextualHelp, Heading } from '@adobe/react-spectrum';
import WrappedComboBoxField from '../../components/wrappedComboBox';
import eventNames from '../../utils/eventNames';

export default () => [
  [
    'event',
    'Event Name',
    'Events are defined as actions a website visitor takes ' +
      'Conversion event name. ',
    true,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          For accepted event names, please refer to the{' '}
          <a
            href="https://ads.tiktok.com/marketing_api/docs?id=1741601162187777"
            rel="noreferrer"
            target="_blank"
          >
            documentation
          </a>
          .
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
    'ISO 8601 format timestamp that the event took place.',
    true,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Timestamp with ISO 8601 format. For example,
          <strong>
            <code>2022-11-23T03:30:52Z</code>
          </strong>
          .
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
    'Any string or hashed ID that can identify a unique event. ' +
      'This is required if you are sending overlapping events ' +
      'from both TikTok Pixel and Events API.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please check{' '}
          <a
            href="https://ads.tiktok.com/marketing_api/docs?id=1739584864945154"
            rel="noreferrer"
            target="_blank"
          >
            Event deduplication
          </a>{' '}
          for details and complete the setup.{' '}
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'ldu',
    'Limited Data Use',
    'Flag events for limited data processing.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
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
          <a
            href="https://ads.tiktok.com/i18n/official/article?aid=10015015"
            rel="noreferrer"
            target="_blank"
          >
            jurisdictional terms
          </a>
          .
        </p>
      </Content>
    </ContextualHelp>
  ]
];
