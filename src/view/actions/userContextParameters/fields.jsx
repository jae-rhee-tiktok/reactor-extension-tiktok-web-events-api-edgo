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
import { useFormContext } from 'react-hook-form';
import {
  Content,
  Flex,
  Heading,
  Link,
  TextField,
  ContextualHelp,
  View
} from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';

import Parameters from './getParameters';

export default function UserContextParametersFields() {
  const { watch } = useFormContext();
  const [event] = watch(['event']);

  const userContext = Parameters({ event });

  return (
    <View>
      <Flex alignItems="center" gap="size-75">
        <Heading level="3">User Context Parameters</Heading>

        <ContextualHelp>
          <Heading>Tip</Heading>
          <Content>
            <p>
              Events API 2.0 uses customer information, such as TikTok Click
              IDs, Advanced Matching, and additional signals like IP address and
              User Agent, to match web visitor events with TikTok users. Once
              matched, information shared via the Events API can be used to
              build targeting audiences, inform the optimization algorithm, and
              better measure campaign results.
            </p>
            <p>
              To increase the accuracy of targeting and optimization models, it
              is highly recommended to include multiple types of matching data.
              You can use Advanced Matching, TikTok Click IDs (
              <code>ttclid</code>), and Cookies to attribute conversions.
            </p>
            <p>
              For more details, refer{' '}
              <Link>
                <a
                  href="https://business-api.tiktok.com/portal/docs?id=1771101151059969"
                  rel="noreferrer"
                  target="_blank"
                >
                  here
                </a>
              </Link>
              for more information.
            </p>
          </Content>
        </ContextualHelp>
      </Flex>

      {userContext.map(
        ([name, label, description, isRequired, contextualHelp]) => {
          return (
            <WrappedTextField
              key={name}
              name={name}
              component={TextField}
              minWidth="size-4600"
              width="size-4600"
              label={label}
              description={description}
              isRequired={isRequired}
              necessityIndicator={isRequired && 'label'}
              contextualHelp={contextualHelp}
              supportDataElement
            />
          );
        }
      )}
    </View>
  );
}
