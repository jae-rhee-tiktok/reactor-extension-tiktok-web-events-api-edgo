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
  TextField,
  ContextualHelp,
  View
} from '@adobe/react-spectrum';
import WrappedTextField from '../../components/wrappedTextField';

import Parameters from './getParameters';

export default function AppEventParametersFields() {
  const { watch } = useFormContext();
  const [event] = watch(['event']);

  const appEventParams = Parameters({ event });

  return (
    <View>
      <Flex alignItems="center" gap="size-75">
        <Heading level="3">App Event Parameters</Heading>

        <ContextualHelp>
          <Heading>Tip</Heading>
          <Content>
            <p>
              Use the <code>app</code> parameters to share information about the
              advertiser&apos;s app with Events API 2.0. The <code>app</code>{' '}
              parameters should only be used when reporting App Events (
              <code>event_source</code> = <code>app</code>).
            </p>
            <p>
              <strong>Note:</strong> Reporting App Events using Events API 2.0
              is currently an allowlist-only feature. If you would like to
              access it, please contact your TikTok representative.
            </p>
          </Content>
        </ContextualHelp>
      </Flex>

      {appEventParams.map(
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
