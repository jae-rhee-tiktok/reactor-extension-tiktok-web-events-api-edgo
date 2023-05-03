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

/* eslint-disable camelcase */

const { formatEmail, formatPhone } = require('./utils/formatter');

const pixelTrackEndpoint =
  'https://business-api.tiktok.com/open_api/v1.3/pixel/track/';
const partner_name = 'Adobe';

const buildEapiRequest = async (getExtensionSettings, getSettings) => {
  const {
    event,
    timestamp,
    eventId,
    ip,
    userAgent,
    email,
    phone,
    ttp,
    externalId,
    ttclid,
    pageUrl,
    pageReferrerUrl,
    price,
    quantity,
    contentType,
    contentId,
    contentCategory,
    contentName,
    currency,
    value,
    description,
    query,
    status
  } = getSettings();

  const { pixelCode, accessToken } = getExtensionSettings();

  const requestHeaders = {
    'Content-Type': 'application/json',
    'Access-Token': accessToken
  };

  const requestBody = {
    pixel_code: pixelCode,
    event: event,
    event_id: eventId,
    timestamp: timestamp,
    partner_name: partner_name,
    context: {
      ad: {
        callback: ttclid ? ttclid : undefined
      },
      page: {
        url: pageUrl,
        referrer: pageReferrerUrl ? pageReferrerUrl : undefined
      },
      user: {
        external_id: externalId ? externalId : undefined,
        phone_number: phone ? await formatPhone(phone) : undefined,
        email: email ? await formatEmail(email) : undefined,
        ttp: ttp ? ttp : undefined
      },
      user_agent: userAgent ? userAgent : undefined,
      ip: ip ? ip : undefined
    },
    properties: {
      contents: [
        {
          price: price ? price : undefined,
          quantity: quantity ? quantity : undefined,
          content_type: contentType ? contentType : undefined,
          content_id: contentId ? contentId : undefined,
          content_category: contentCategory ? contentCategory : undefined,
          content_name: contentName ? contentName : undefined
        }
      ],
      currency: currency ? currency : undefined,
      value: value ? value : undefined,
      description: description ? description : undefined,
      query: query ? query : undefined,
      status: status ? status : undefined
    }
  };

  return {
    method: 'POST',
    headers: requestHeaders,
    body: requestBody
  };
};

module.exports = async ({ utils }) => {
  const { getExtensionSettings, getSettings, fetch } = utils;

  return fetch(
    pixelTrackEndpoint,
    await buildEapiRequest(getExtensionSettings, getSettings)
  );
};
