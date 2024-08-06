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
import { Content, Flex, Heading, View } from '@adobe/react-spectrum';
import getEmptyDataJson from './getEmptyValue';

import PayloadEditor from '../../components/rawJsonEditor';
import PayloadRow from './row';

import {
  addToVariablesFromEntity,
  addToEntityFromVariables
} from '../../utils/entityVariablesConverter';

export default function ContentsParametersFields() {
  const { setValue, watch } = useFormContext();
  // const [event] = watch(['event']);
  const [dataRaw, dataJsonPairs] = watch(['dataRaw', 'dataJsonPairs']);

  // const properties = Parameters({ event });

  return (
    <View>
      <Flex alignItems="center" gap="size-75">
        <Heading level="3">Contents Parameters</Heading>
      </Flex>
      <Flex alignItems="center" gap="size-75">
        <Content>
          <PayloadEditor
            label="Content properties"
            radioLabel="Select the way you want to provide the contents parameter."
            description={
              'A valid JSON that contains the content payload' +
              ' or a data element.'
            }
            isRequired
            typeVariable="dataType"
            rawVariable="dataRaw"
            jsonVariable="dataJsonPairs"
            getEmptyJsonValueFn={getEmptyDataJson}
            row={PayloadRow}
            onTypeSwitch={(v) => {
              // Auto Update Data Content
              if (v === 'json') {
                let variables = [];
                try {
                  variables = addToVariablesFromEntity([], JSON.parse(dataRaw));
                } catch (e) {
                  // Don't do anything
                }

                if (variables.length === 0) {
                  variables.push(getEmptyDataJson());
                }

                setValue('dataJsonPairs', variables, {
                  shouldValidate: true,
                  shouldDirty: true
                });
              } else if (dataJsonPairs.length > 1 || dataJsonPairs[0].key) {
                let entity = JSON.stringify(
                  addToEntityFromVariables({}, dataJsonPairs),
                  null,
                  2
                );

                if (entity === '{}') {
                  entity = '';
                }

                setValue('dataRaw', entity, {
                  shouldValidate: true,
                  shouldDirty: true
                });
              }
              // END: Auto Update Data Content
            }}
          />
        </Content>
      </Flex>
    </View>
  );
}
