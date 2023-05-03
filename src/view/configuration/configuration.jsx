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

import ConfigurationFields from './components/fields';
import getConfigurationInitValues from './components/getInitValues';
import getConfigurationSettings from './components/getSettings';
import validateConfigurationFields from './components/validate';

export default function Configuration() {
  return (
    <ExtensionView
      getInitialValues={({ initInfo }) => ({
        ...getConfigurationInitValues(initInfo)
      })}
      getSettings={({ values }) => ({
        ...getConfigurationSettings(values)
      })}
      validate={(values) => ({
        ...validateConfigurationFields(values)
      })}
      render={() => <ConfigurationFields />}
    />
  );
}