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
  'https://business-api.tiktok.com/open_api/v1.3/event/track/';
const partner_name = 'Adobe';

function buildContentsArray(contents) {
  const result = [];
  if (!contents || contents.length < 1) {
    return result;
  }
  contents.forEach((content) => {
    const element = {
      price: content.price ? content.price : undefined,
      quantity: content.quantity ? content.quantity : undefined,
      content_id: content.content_id ? content.content_id : undefined,
      content_category: content.content_category
        ? content.content_category
        : undefined,
      content_name: content.content_name ? content.content_name : undefined,
      brand: content.brand ? content.brand : undefined
    };
    result.push(element);
  });
  return result;
}

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
    contents,
    contentType,
    currency,
    value,
    description,
    query,
    orderId,
    shopId,
    ldu
  } = getSettings();

  const { pixelCode, accessToken } = getExtensionSettings();

  const requestHeaders = {
    'Content-Type': 'application/json',
    'Access-Token': accessToken
  };

  const requestBody = {
    event_source: '',
    event_source_id: pixelCode,
    partner_name: partner_name,
    data: [
      {
        event: event,
        event_time: timestamp
          ? Math.floor(new Date(timestamp).getTime() / 1000)
          : Math.floor(new Date().getTime() / 1000),
        event_id: eventId,
        user: {
          ttclid: ttclid ? ttclid : undefined,
          external_id: externalId ? formatEmail(externalId) : undefined,
          phone: phone ? formatPhone(phone) : undefined,
          email: email ? formatEmail(email) : undefined,
          lead_id: leadId ? leadId : undefined,
          ttp: ttp ? ttp : undefined,
          ip: ip ? ip : undefined,
          user_agent: userAgent ? userAgent : undefined,
          locale: userLocale ? userLocale : undefined
        },
        properties: {
          contents: buildContentsArray(contents),
          content_type: contentType ? contentType : 'product',
          currency: currency ? currency : 'USD',
          value: value ? value : undefined,
          query: query ? query : undefined,
          description: description ? description : undefined,
          order_id: orderId ? orderId : undefined,
          shop_id: shopId ? shopId : undefined
        },
        page: {
          url: pageUrl ? pageUrl : undefined,
          referrer: pageReferrerUrl ? pageReferrerUrl : undefined
        },
        limited_data_use: ldu ? true : false
      }
    ]
  };

  return {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify(requestBody)
  };
};

module.exports = async ({ utils }) => {
  const { getExtensionSettings, getSettings, fetch } = utils;

  return fetch(
    pixelTrackEndpoint,
    await buildEapiRequest(getExtensionSettings, getSettings)
  );
};
