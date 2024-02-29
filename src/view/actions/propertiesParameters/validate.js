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

const contentInfoRequiredEvents = [
  'AddToCart',
  'CompletePayment',
  'PlaceAnOrder',
  'ViewContent'
];

export default (values) => {
  const errors = {};

  if (values?.event && contentInfoRequiredEvents.includes(values.event)) {
    if (!values.contents) {
      errors.contents =
        'Please provide the contents list for these following events: "AddToCart", ' +
        '"CompletePayment", "PlaceAnOrder", and "ViewContent".';
    }
    if (!values.contentType) {
      errors.contentType =
        'Please provide the content type for these following events: "AddToCart", ' +
        '"CompletePayment", "PlaceAnOrder", and "ViewContent".';
    }
    if (!values.currency) {
      errors.currency =
        'Please provide the currency for these following events: "AddToCart", ' +
        '"CompletePayment", "PlaceAnOrder", and "ViewContent".';
    }
    if (!values.value) {
      errors.value =
        'Please provide the value for these following events: "AddToCart", ' +
        '"CompletePayment", "PlaceAnOrder", and "ViewContent".';
    }
  }
  return errors;
};
