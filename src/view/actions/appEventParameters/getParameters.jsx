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

export default () => [
  [
    'appId',
    'App ID',
    '[Required for app events] Mobile App ID.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>Required for app events.</strong>
        </p>
        <p>
          <ul>
            <li>For iOS Apps, use the app ID found in the App Store URL.</li>
            <li>
              For Android Apps in the Google Play store, use the app ID found in
              the Google Play store URL.
            </li>
            <li>
              For Android Apps in the Google Play store, use the package name.
            </li>
          </ul>
        </p>
      </Content>
    </ContextualHelp>
  ],
  ['appName', 'App Name', 'Application name.', false],
  ['appVersion', 'App Version', 'App version number.', false],
  [
    'callback',
    'Callback',
    'Callback information to help attribute events.',
    false
  ],
  ['campaignId', 'Campaign ID', 'Campaign ID.', false],
  ['adId', 'Ad Group ID', 'Ad group ID.', false],
  ['creativeId', 'Ad ID', 'Ad ID.', false],
  [
    'isRetargeting',
    'Retargeting',
    'Whether the user is a retargeting user.',
    false
  ],
  ['attributed', 'Attributed', 'Whether the event is attributed.', false],
  ['attributionType', 'Attribution Type', 'Attribution type.', false],
  [
    'attributionProvider',
    'Attribution Provider',
    'Attribution provider.',
    false
  ]
];
