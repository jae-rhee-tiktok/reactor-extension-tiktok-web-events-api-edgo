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

export default function PropertiesParametersFields() {
  const { watch } = useFormContext();
  const [event] = watch(['event']);

  const properties = Parameters({ event });

  return (
    <View>
      <Flex alignItems="center" gap="size-75">
        <Heading level="3">Properties Parameters</Heading>

        <ContextualHelp>
          <Heading>Tip</Heading>
          <Content>
            <p>
              Use these parameters to include additional supported fields that
              can be used for optimization.
            </p>
            <p>
              Please note{' '}
              <strong>
                <code>value</code>
              </strong>{' '}
              and{' '}
              <strong>
                <code>currency</code>
              </strong>{' '}
              are required for{' '}
              <strong>
                <code>CompletePayment</code>
              </strong>{' '}
              events.
            </p>
            <p>
              For more details, see the{' '}
              <Link>
                <a
                  href="https://ads.tiktok.com/marketing_api/docs?id=1741601162187777"
                  rel="noreferrer"
                  target="_blank"
                >
                  documentation - Properties object parameters
                </a>
              </Link>
              .
            </p>
          </Content>
        </ContextualHelp>
      </Flex>

      {properties.map(
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
