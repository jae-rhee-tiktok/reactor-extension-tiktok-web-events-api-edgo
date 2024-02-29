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

const sendEapiData = require('../sendEapiData');
const pixelTrackEndpoint =
  'https://business-api.tiktok.com/open_api/v1.3/event/track/';

const webExtensionSettings = {
  pixelCode: '1234',
  accessToken: 'test_token',
  eventSource: 'web',
  eventSourceId: '4321'
};

describe('Send Web Events API data to TikTok', () => {
  test('CompletePayment event with multiple products with multiple PIIs', async () => {
    const fetch = jest.fn(() => Promise.resolve({}));

    const multiProductsSettings = {
      appId: 'test_app_id', // app event parameters
      appName: 'test_app_name',
      appVersion: 'test_app_version',
      callback: 'test_app_callback',
      campaignId: 'test_app_campaign_id',
      adId: 'test_app_ad_id',
      creativeId: 'test_app_creative_id',
      isRetargeting: false,
      attributed: false,
      attributionType: 'test_app_attribution_type',
      attributionProvider: 'test_app_attribution_provider',
      leadId: 'test_lead_id', // lead event parameters
      leadEventSource: 'test_lead_event_source',
      contents: [
        {
          price: 100.0,
          quantity: 2,
          content_id: '12345',
          content_name: 'Fancy-AirMax2.0 Black',
          content_category: 'Shoes - Running Shoes',
          brand: 'Fancy Sneakers'
        },
        {
          price: 10.0,
          quantity: 1,
          content_id: '54321',
          content_name: 'Fancy-AirMax2.0 White',
          content_category: 'Shoes - Running Shoes',
          brand: 'Fancy Sneakers'
        }
      ], // properties parameters
      contentType: 'product',
      currency: 'USD',
      // eslint-disable-next-line prettier/prettier
      value: 210.0,
      query: 'test_query',
      orderId: 'test_order_id',
      shopId: 'test_shop_id',
      // eslint-disable-next-line prettier/prettier
      price: 100.0,
      quantity: 2,
      contentId: 'test_deprecated_content_id',
      contentCategory: 'product',
      contentName: 'test_deprecated_content_name',
      status: 'test_deprecated_status',
      event: 'CompletePayment', // event parameters
      timestamp: '2024-02-29T19:22:24.000Z',
      eventId: 'test_event_id',
      ldu: false,
      ip: '1.1.1.1', // user context parameters
      userAgent: 'test_user_agent',
      email: ['test@test.com', 'test1@test1.com'],
      phone: ['+12345678900', '+10987654321'],
      ttp: 'test_ttp_id',
      externalId: ['test_external_id_1', 'test_external_id_2'],
      ttclid: 'test_click_id',
      userLocale: 'en_US',
      pageUrl: 'https://www.test.com',
      pageReferrerUrl: 'https://www.test.com/referrer'
    };

    const utils = {
      fetch: fetch,
      getSettings: () => multiProductsSettings,
      getExtensionSettings: () => webExtensionSettings
    };

    return sendEapiData({ utils }).then(() => {
      expect(fetch).toHaveBeenCalledWith(pixelTrackEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': webExtensionSettings.accessToken
        },
        body: {
          event_source: webExtensionSettings.eventSource,
          event_source_id: webExtensionSettings.eventSourceId,
          partner_name: 'Adobe',
          data: [
            {
              event: multiProductsSettings.event,
              event_time: '1709234544',
              event_id: multiProductsSettings.eventId,
              user: {
                ttclid: multiProductsSettings.ttclid,
                external_id: [
                  '94e5002057197a0d5078e66227b936459b51c839fda153ad23444db0f738133f',
                  'b50b755db905d46e86af2b50abf4c902a9a4a4a094b14b0e8f1f46d29a1cf855'
                ],
                phone: [
                  '7f459725e1f658720fd2c41b71737eb3aef333edd9a96704cbddb5b884f0e129',
                  'dd33d16a1017bda818bf3d13630f8fec1d245dd213c6d96a88a35bb6cf23d66b'
                ],
                email: [
                  'f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a',
                  '621f230bb327e8061919186e2ba8e0054dc3decef2faaf198502ca40f3e92601'
                ],
                ttp: multiProductsSettings.ttp,
                ip: multiProductsSettings.ip,
                user_agent: multiProductsSettings.userAgent,
                locale: multiProductsSettings.userLocale
              },
              properties: {
                contents: multiProductsSettings.contents,
                content_type: multiProductsSettings.contentType,
                currency: multiProductsSettings.currency,
                value: multiProductsSettings.value,
                query: multiProductsSettings.query,
                description: multiProductsSettings.description,
                order_id: multiProductsSettings.orderId,
                shop_id: multiProductsSettings.shopId
              },
              page: {
                url: multiProductsSettings.pageUrl,
                referrer: multiProductsSettings.pageReferrerUrl
              },
              limited_data_use: false
            }
          ]
        }
      });
    });
  });
});
