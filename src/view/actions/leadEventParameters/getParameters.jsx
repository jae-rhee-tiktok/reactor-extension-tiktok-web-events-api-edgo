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
    'leadId',
    'Lead ID',
    '[Required for CRM events] ID of TikTok leads.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>Required for CRM events.</strong>
        </p>
        <p>
          Every lead will have its <code>lead_id</code> when exported from
          TikTok.
        </p>
        <p>
          To obtain the ID of a lead, download the lead by using the endpoints{' '}
          <code>/page/lead/task/</code> and{' '}
          <code>/page/lead/task/download/</code>, or export the lead from TikTok
          Leads Center, the first-party CRM platform located within TikTok Ads
          Manager.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'leadEventSource',
    'Lead Event Source',
    'You can set this field to the name of your CRM system, such as HubSpot or Salesforce.',
    false
  ]
];
