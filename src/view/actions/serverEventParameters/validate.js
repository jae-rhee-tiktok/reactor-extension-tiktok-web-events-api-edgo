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

export default (values) => {
  const errors = {};

  if (!values.event) {
    errors.event = 'Please provide an event name.';
  }

  if (!values.timestamp) {
    errors.timestamp = 'Please provide an event timestamp.';
  }

  if (!values.pageUrl) {
    errors.pageUrl = 'Please provide the event page URL.';
  } else if (!values.pageUrl.match(/https?:\/\//)) {
    errors.pageUrl = 'The URL must begin with http://, https://.';
  }

  return errors;
};
