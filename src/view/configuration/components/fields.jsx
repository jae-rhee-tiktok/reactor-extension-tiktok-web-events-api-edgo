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
import WrappedComboBoxField from '../../components/wrappedComboBox';

export default function ConfigurationFields() {
  return (
    <Flex direction="column" gap="size-65">
      <WrappedTextField
        name="eventSourceId"
        component={TextField}
        width="size-4600"
        label="Event Source ID"
        isRequired
        necessityIndicator="label"
        supportDataElement
        contextualHelp={
          <ContextualHelp>
            <Heading>Tip</Heading>
            <Content>
              <p>An Event Source ID that is used to track events.</p>
              <p>
                <ul>
                  <li>
                    <p>
                      When <code>event_source</code> is set to <code>web</code>,
                      specify a Pixel Code through this field.
                    </p>
                    <p>
                      To obtain a Pixel Code, refer to{' '}
                      <Link>
                        <a
                          href="https://ads.tiktok.com/marketing_api/docs?id=1771101001228290#item-link-Q2%3A%20Where%20can%20I%20find%20the%20pixel_code%3F"
                          rel="noreferrer"
                          target="_blank"
                        >
                          FAQs - Where can I find the pixel_code?
                        </a>
                      </Link>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      When <code>event_source</code> is set to{' '}
                      <code>offline</code>, specify an Offline Event Set ID
                      through this field.
                    </p>
                    <p>
                      To obtain an Offline Event Set ID, refer to
                      <Link>
                        <a
                          href="https://ads.tiktok.com/marketing_api/docs?id=1771101027431425"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Setup Guide for Offline
                        </a>
                      </Link>
                      .
                    </p>
                  </li>
                  <li>
                    <p>
                      When <code>event_source</code> is set to <code>app</code>,
                      specify a TikTok App ID through this field.
                    </p>
                    <p>
                      To obtain a TikTok App ID, refer to
                      <Link>
                        <a
                          href="https://ads.tiktok.com/marketing_api/docs?id=1771101111730178"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Setup Guide for App
                        </a>
                      </Link>
                      .
                    </p>
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

      <WrappedTextField
        name="pixelCode"
        component={TextField}
        width="size-4600"
        label="[Deprecated]Pixel Code"
        isRequired={false}
        necessityIndicator="label"
        supportDataElement
        contextualHelp={
          <ContextualHelp>
            <Heading>Tip</Heading>
            <Content>
              <p>
                Please use the <code>eventSourceId</code> configuration.
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

      <WrappedComboBoxField
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
              <p>Enum values:</p>
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
        defaultItems={['web', 'offline', 'app', 'crm'].map((q) => ({
          id: q,
          name: q
        }))}
      />
    </Flex>
  );
}
