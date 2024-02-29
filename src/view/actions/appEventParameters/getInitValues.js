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

export default ({ settings }) => {
  return {
    appId: settings?.appId || undefined,
    appName: settings?.appName || undefined,
    appVersion: settings?.appVersion || undefined,
    callback: settings?.callback || undefined,
    campaignId: settings?.campaignId || undefined,
    adId: settings?.adId || undefined,
    creativeId: settings?.creativeId || undefined,
    isRetargeting: settings?.isRetargeting || undefined,
    attributed: settings?.attributed || undefined,
    attributionType: settings?.attributionType || undefined,
    attributionProvider: settings?.attributionProvider || undefined
  };
};
