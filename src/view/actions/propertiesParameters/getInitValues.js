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
    price: settings?.price || '',
    quantity: settings?.quantity || '',
    contentType: settings?.contentType || '',
    contentId: settings?.contentId || '',
    contentCategory: settings?.contentCategory || '',
    contentName: settings?.contentName || '',
    currency: settings?.currency || '',
    value: settings?.value || '',
    description: settings?.description || '',
    query: settings?.query || '',
    status: settings?.status || ''
  };
};
