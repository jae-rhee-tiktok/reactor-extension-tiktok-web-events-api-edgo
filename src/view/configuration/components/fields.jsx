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
import {
  Content,
  Flex,
  Link,
  TextField,
  ContextualHelp,
  Heading
} from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';

export default function ConfigurationFields() {
  return (
    <Flex direction="column" gap="size-65">
      <WrappedTextField
        name="pixelCode"
        component={TextField}
        width="size-4600"
        label="Pixel Code"
        isRequired
        necessityIndicator="label"
        supportDataElement
        contextualHelp={
          <ContextualHelp>
            <Heading>Tip</Heading>
            <Content>
              <p>
                If you already have a TikTok pixel integrated for the website,
                you could use the existing pixel code. You could find the
                pixel_code by logging in your TikTok Ads Manager account and
                navigate to Assets-&gt;Event-&gt;Web Events.
              </p>
              <p>
                This means the events forwarded to us will show up under that
                pixel. Please be aware that if you are sending overlapping
                events from both Pixel SDK and Events API, you must set up{' '}
                <a
                  href="https://ads.tiktok.com/marketing_api/docs?rid=p41a33fdhon&id=1739584864945154"
                  rel="noreferrer"
                  target="_blank"
                >
                  Event deduplication
                </a>
                .
              </p>
              <p>
                If you don&apos;t want to use the existing pixel and want to
                create pixel from scratch, go to{' '}
                <strong>Assets-&gt;Events-&gt;Web Events</strong>. Click on{' '}
                <strong>Set Up Web Events</strong> and select{' '}
                <strong>Events API</strong>.
              </p>
            </Content>
          </ContextualHelp>
        }
      />

      <WrappedTextField
        name="accessToken"
        component={TextField}
        width="size-4600"
        label="Access Token"
        isRequired
        necessityIndicator="label"
        supportDataElement
        contextualHelp={
          <ContextualHelp>
            <Heading>Tip</Heading>
            <Content>
              <p>
                An access token is needed to authorize Events API calls. You
                must be an Admin or Operator for the ad account to generate an
                access token.
              </p>
              <Link>
                <a
                  href="https://ads.tiktok.com/marketing_api/docs?id=1739584855420929"
                  rel="noreferrer"
                  target="_blank"
                >
                  How to generate an access token via TikTok Events Manager
                </a>
              </Link>
            </Content>
          </ContextualHelp>
        }
      />

      <WrappedTextField
        name="eventSource"
        component={TextField}
        width="size-4600"
        label="Event Source"
        isRequired
        necessityIndicator="label"
        supportDataElement
        contextualHelp={
          <ContextualHelp>
            <Heading>Tip</Heading>
            <Content>
              <p>
                This field is used to specify the type of events you are
                uploading through Events API.
              </p>
              <p>Enum values</p>
              <p>
                <ul>
                  <li>
                    <code>web</code>: The events took place on your website and
                    are tracked by a Pixel Code.
                  </li>
                  <li>
                    <code>app</code>: The events took place on your app and are
                    tracked by a TikTok App ID.
                  </li>
                  <li>
                    <code>offline</code> : The conversions took place in a
                    physical store and are tracked by an Offline Event Set ID.
                  </li>
                  <li>
                    <code>crm</code>: The lead events took place in a CRM system
                    and and and and are tracked by a CRM Event Set ID.
                  </li>
                </ul>
              </p>
            </Content>
          </ContextualHelp>
        }
      />
    </Flex>
  );
}
