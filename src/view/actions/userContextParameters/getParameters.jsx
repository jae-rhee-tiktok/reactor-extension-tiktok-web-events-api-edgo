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
    "[For web and app events only] Non-hashed public IP address of the user's device.",
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web and app events only.</strong>
        </p>
        <p>
          To increase the probability of matching website visitor events with
          TikTok ads, we recommend sending both <code>ip</code> and{' '}
          <code>user_agent</code>.
        </p>
        <p>
          Both IPv4 and IPv6 addresses are supported. For IPv6 addresses, both
          full and compressed formats are acceptable.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'userAgent',
    'User Agent',
    "[For web and app events only] Non-hashed user agent from the user's device.",
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web and app events only.</strong>
        </p>
        <p>
          To increase the probability of matching website visitor events with
          TikTok ads, we recommend sending both <code>ip</code> and{' '}
          <code>user_agent</code>.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'email',
    'Email',
    '[For web, app, offline, and CRM events] The email address, ' +
      'or email addresses of the customer.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web, app, offline, and CRM events.</strong>
        </p>
        <p>
          <strong>SHA-256 hashing is required.</strong>
        </p>
        <p>TikTok extension will automatically hash any non-hashed values.</p>
      </Content>
    </ContextualHelp>
  ],
  [
    'phone',
    'Phone',
    '[For web, app, offline, and CRM events] The phone number or phone numbers of the customer.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web, app, offline, and CRM events.</strong>
        </p>
        <p>
          <strong>SHA-256 hashing is required.</strong>
        </p>
        <p>TikTok extension will automatically hash any non-hashed values.</p>
        <p>
          <strong>Normalize</strong> the phone number to{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1739584860883969"
              rel="noreferrer"
              target="_blank"
            >
              E.164 format
            </a>
          </Link>{' '}
          (for example, &quot;+12133734253&quot;). We recommend using
          https://github.com/catamphetamine/libphonenumber-js for E.164 parsing.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'ttp',
    'Cookie ID',
    '[For web events only] TikTok Click ID.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web events only.</strong>
        </p>
        <p>
          If you also use Pixel SDK and have enabled cookies, Pixel SDK
          automatically saves a unique identifier in the <code>_ttp</code>{' '}
          cookie. The value of <code>_ttp</code> is used to match website
          visitor events with TikTok ads. You can extract the value of{' '}
          <code>_ttp</code> and attach the value here.
        </p>
        <p>
          To learn more about the <code>ttp</code> parameter, refer to{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=%201771100936446977"
              rel="noreferrer"
              target="_blank"
            >
              Events API 2.0 - Send TikTok Cookie (<code>_ttp</code>)
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'externalId',
    'External ID',
    '[For web and CRM events only] External ID, a unique identifier ' +
      "on the advertiser's side, such as loyalty membership IDs, user IDs, and external cookie IDs",
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web and CRM events only.</strong>
        </p>
        <p>
          To learn more about the <code>external_id</code> parameter, refer to{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1771100952291330"
              rel="noreferrer"
              target="_blank"
            >
              Events API 2.0 - Set up External ID
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'ttclid',
    'TikTok Click ID',
    '[For web events only] TikTok Click ID, a tracking parameter ' +
      'appended to a landing page URL whenever a user clicks on an ad on TikTok.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web events only.</strong>
        </p>
        <p>
          The <code>ttcid</code> valid period is the same as your CTA window
          setting in{' '}
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
          For more information on sending TikTok Click IDs, refer to{' '}
          <Link>
            <a
              href="https://ads.tiktok.com/marketing_api/docs?id=1771100879787009"
              rel="noreferrer"
              target="_blank"
            >
              Events API 2.0 - Send TikTok Click ID (<code>ttclid</code>)
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'userLocale',
    'Locale',
    '[For web and app events only] The BCP 47 language identifier.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>For web and app events only.</strong>
        </p>
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
    'The browser URL where the event happened.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          The browser URL where the event happened, for example, the value of{' '}
          <code>location.href</code> in the client side Javascript.
        </p>
        <p>
          It is recommended to use the full URL, including all URLparameters.
        </p>
        <p>
          Example:{' '}
          <code>
            &quot;http://demo.mywebsite.com/purchase?v=helloworld&quot;
          </code>
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'pageReferrerUrl',
    'Page Referrer URL',
    'The page referrer URL.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          For example,{' '}
          <Link>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer"
              rel="noreferrer"
              target="_blank"
            >
              document.referrer
            </a>
          </Link>{' '}
          in the client side Javascript, or the server side{' '}
          <Link>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer"
              rel="noreferrer"
              target="_blank"
            >
              Referer http header
            </a>
          </Link>
          .
        </p>
      </Content>
    </ContextualHelp>
  ]
];
