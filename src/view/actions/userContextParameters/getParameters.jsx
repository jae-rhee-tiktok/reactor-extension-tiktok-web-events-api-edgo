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
import { Content, Link, ContextualHelp, Heading } from '@adobe/react-spectrum';

export default () => [
  [
    'ip',
    'IP Address',
    'Non-hashed public IP address of the browser.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          To increase the probability of matching website visitor events with
          TikTok ads, we recommend sending both{' '}
          <strong>
            <code>ip</code>
          </strong>{' '}
          and{' '}
          <strong>
            <code>user_agent</code>
          </strong>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'userAgent',
    'User Agent',
    "Non-hashed user agent from the user's device.",
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          To increase the probability of matching website visitor events with
          TikTok ads, we recommend sending both{' '}
          <strong>
            <code>ip</code>
          </strong>{' '}
          and{' '}
          <strong>
            <code>user_agent</code>
          </strong>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'email',
    'Email',
    'The email of the customer if available. ' +
      'It must be hashed with SHA-256 on the client side.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>You should lowercase all characters before hashing.</p>
        <p>
          Do not perform any other types of normalization on emails prior to
          hashing.
        </p>
        <p>
          Only SHA-256 is accepted. Here is the recommended package:{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1739584860883969"
              rel="noreferrer"
              target="_blank"
            >
              GitHub - emn178/js-sha256: A simple SHA-256 / SHA-224 hash
              function for JavaScript supports UTF-8 encoding
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'phone',
    'Phone',
    'The phone number of the customer if available. ' +
      'It must be hashed with SHA-256 on the client side.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Normalize your phone numbers to E.164 format, a combination of +
          &#91;country code&#93;&#91;phone number&#93;. An example of a US
          number in the E.164 format:{' '}
          <strong>
            <code>+12133734253</code>
          </strong>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'ttp',
    'Cookie ID',
    'If you also use Pixel SDK and enabled cookie, ' +
      'Pixel SDK automatically saves a unique identifier ' +
      'in the _ttp cookie. The value of _ttp is used to ' +
      'match website visitor events with TikTok ads. You ' +
      'can extract the value of _ttp and attach the value here.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>You should lowercase all characters before hashing.</p>
        <p>
          Do not perform any other types of normalization on emails prior to
          hashing.
        </p>
        <p>
          For details, see{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1739584860883969"
              rel="noreferrer"
              target="_blank"
            >
              Set up TikTok Click ID and Cookies
            </a>
          </Link>{' '}
          section.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'externalId',
    'External ID',
    "Any unique identifier on the advertiser's side, " +
      'such as loyalty membership IDs, user IDs, and ' +
      'external cookie IDs. It must be hashed with ' +
      'SHA-256 on the client side.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>Leading/Trailing spaces need to be trimmed before hashing.</p>
      </Content>
    </ContextualHelp>
  ],
  [
    'leadId',
    'Lead ID',
    'ID of TikTok leads.',
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
  ],
  [
    'ttclid',
    'TikTok Click ID',
    'TikTok Click ID (ttclid) is a tracking parameter appended to a ' +
      'landing page URL whenever a user clicks on an ad on TikTok.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          The{' '}
          <strong>
            <code>ttcid</code>
          </strong>{' '}
          valid period is the same as your CTA window setting in{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/help/article/attribution-manager?redirected=1"
              rel="noreferrer"
              target="_blank"
            >
              Attribution Manager
            </a>
          </Link>
          .
        </p>
        <p>
          For details, see{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1739584860883969"
              rel="noreferrer"
              target="_blank"
            >
              Set up TikTok Click ID and Cookies
            </a>
          </Link>{' '}
          section.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'userLocale',
    'Locale',
    'The BCP 47 language identifier.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          For reference, refer to{' '}
          <Link>
            <a
              href="https://www.rfc-editor.org/rfc/bcp/bcp47.txt"
              rel="noreferrer"
              target="_blank"
            >
              the IETF BCP 47 standardized code
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'pageUrl',
    'Page URL',
    'The browser URL where the event happened. The URL must begin with http:// or https://.',
    true
  ],
  ['pageReferrerUrl', 'Page Referrer URL', 'The page referrer URL.', false]
];
