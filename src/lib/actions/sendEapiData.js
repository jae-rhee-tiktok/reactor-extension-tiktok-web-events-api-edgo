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
    event, // serverEventParameters
    timestamp, // serverEventParameters
    eventId, // serverEventParameters
    ip, // userContextParameters
    userAgent, // userContextParameters
    email, // userContextParameters
    phone, // userContextParameters
    ttp, // userContextParameters
    externalId, // userContextParameters
    leadId, // leadEVentParameters
    leadEventSource, // leadEVentParameters
    ttclid, // userContextParameters
    userLocale, // userContextParameters
    pageUrl, // userContextParameters
    pageReferrerUrl, // userContextParameters
    contents, // propertiesParamters
    contentType, // propertiesParamters
    currency, // propertiesParamters
    value, // propertiesParamters
    description, // propertiesParamters
    query, // propertiesParamters
    orderId, // propertiesParamters
    shopId, // propertiesParamters
    ldu, // propertiesParamters
    price, // [DEPRECATED] propertiesParamters
    quantity, // [DEPRECATED] propertiesParamters
    contentId, // [DEPRECATED] propertiesParamters
    contentCategory, // [DEPRECATED] propertiesParamters
    contentName, // [DEPRECATED] propertiesParamters
    status, // [DEPRECATED] propertiesParamters
    appId, //appEventParameters
    appName, //appEventParameters
    appVersion, //appEventParameters
    callback, //appEventParameters
    campaignId, //appEventParameters
    adId, //appEventParameters
    creativeId, //appEventParameters
    isRetargeting, //appEventParameters
    attributed, //appEventParameters
    attributionType, //appEventParameters
    attributionProvider //appEventParameters
  } = getSettings();

  const { eventSourceId, pixelCode, accessToken, eventSource } =
    getExtensionSettings();

  const requestHeaders = {
    'Content-Type': 'application/json',
    'Access-Token': accessToken
  };

  const updatedEventSourceId = eventSourceId ? eventSourceId : pixelCode;

  const inputContents = contents && Array.isArray(contents) ? contents : [];

  if (contentId) {
    const singleContent = {
      price: price ? price : undefined,
      quantity: quantity ? quantity : undefined,
      content_id: contentId ? contentId : undefined,
      content_category: contentCategory ? contentCategory : undefined,
      content_name: contentName ? contentName : undefined
    };
    inputContents.push(singleContent);
  }

  const requestBody = {
    event_source: eventSource ? eventSource : 'web',
    event_source_id: updatedEventSourceId,
    partner_name: partner_name,
    data: [
      {
        event: event,
        event_time: timestamp // TODO: check for unix format
          ? Math.floor(new Date(timestamp).getTime() / 1000)
          : Math.floor(new Date().getTime() / 1000),
        event_id: eventId,
        user: {
          ttclid: ttclid ? ttclid : undefined,
          external_id: externalId ? await formatEmail(externalId) : undefined,
          phone: phone ? await formatPhone(phone) : undefined,
          email: await formatEmail(email),
          ttp: ttp ? ttp : undefined,
          ip: ip ? ip : undefined,
          user_agent: userAgent ? userAgent : undefined,
          locale: userLocale ? userLocale : undefined
        },
        properties: {
          contents: buildContentsArray(inputContents),
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
        app: {
          app_id: appId ? appId : undefined,
          app_name: appName ? appName : undefined,
          app_version: appVersion ? appVersion : undefined
        },
        ad: {
          callback: callback ? callback : undefined,
          campaign_id: campaignId ? campaignId : undefined,
          ad_id: adId ? adId : undefined,
          creative_id: creativeId ? creativeId : undefined,
          is_retargeting: isRetargeting ? isRetargeting : undefined,
          attributed: attributed ? attributed : undefined,
          attribution_type: attributionType ? attributionType : undefined,
          attribution_provider: attributionProvider
            ? attributionProvider
            : undefined
        },
        lead: {
          lead_id: leadId ? leadId : undefined,
          lead_event_source: leadEventSource ? leadEventSource : undefined
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
