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

import React from 'react';

import ExtensionView from '../components/extensionView';

import ServerEventParametersFields from './serverEventParameters/fields';
import getServerEventParametersInitValues from './serverEventParameters/getInitValues';
import getServerEventParametersSettings from './serverEventParameters/getSettings';
import validateServerEventParametersFields from './serverEventParameters/validate';

import UserContextParametersFields from './userContextParameters/fields';
import getUserContextParametersInitValues from './userContextParameters/getInitValues';
import getUserContextParametersSettings from './userContextParameters/getSettings';
import validateUserContextParametersFields from './userContextParameters/validate';

import PropertiesParametersFields from './propertiesParameters/fields';
import getPropertiesParametersInitValues from './propertiesParameters/getInitValues';
import getPropertiesParametersSettings from './propertiesParameters/getSettings';
import validatePropertiesParametersFields from './propertiesParameters/validate';

import ContentsParametersFields from './contentsParameters/fields';
import getContentsParametersInitValues from './contentsParameters/getInitValues';
import getContentsParametersSettings from './contentsParameters/getSettings';
import validateContentsParametersFields from './contentsParameters/validate';

export default function SendEapiData() {
  return (
    <ExtensionView
      getInitialValues={({ initInfo }) => ({
        ...getServerEventParametersInitValues(initInfo),
        ...getUserContextParametersInitValues(initInfo),
        ...getPropertiesParametersInitValues(initInfo),
        ...getContentsParametersInitValues(initInfo)
      })}
      getSettings={({ values }) => ({
        ...getServerEventParametersSettings(values),
        ...getUserContextParametersSettings(values),
        ...getPropertiesParametersSettings(values),
        ...getContentsParametersSettings(values)
      })}
      validate={(values) => ({
        ...validateServerEventParametersFields(values),
        ...validateUserContextParametersFields(values),
        ...validatePropertiesParametersFields(values),
        ...validateContentsParametersFields(values)
      })}
      render={() => (
        <>
          <ServerEventParametersFields />
          <UserContextParametersFields />
          <PropertiesParametersFields />
          <ContentsParametersFields />
        </>
      )}
    />
  );
}
