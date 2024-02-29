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
    ip: settings?.ip || '',
    userAgent: settings?.userAgent || '',
    email: settings?.email || [],
    phone: settings?.phone || [],
    ttp: settings?.ttp || '',
    externalId: settings?.externalId || [],
    ttclid: settings?.ttclid || '',
    userLocale: settings?.userLocale || '',
    pageUrl: settings?.pageUrl || '',
    pageReferrerUrl: settings?.pageReferrerUrl || ''
  };
};
