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
  'https://business-api.tiktok.com/open_api/v1.3/pixel/track/';

describe('Send Events API data to TikTok', () => {
  test('makes a fetch call to the TikTok Events API endpoint', () => {
    const fetch = jest.fn(() => Promise.resolve({}));

    const extensionSettings = {
      pixelCode: '1234',
      accessToken: 'test_token'
    };

    const settings = {
      event: 'CompletePayment',
      timestamp: '',
      eventId: 'test_event_id',
      ip: '0.0.0.0',
      userAgent: 'test_user_agent',
      email: 'test@test.com',
      phone: '+12345678900',
      externalId: 'test_external_id',
      ttp: 'test_ttp',
      ttclid: 'test_ttclid',
      pageUrl: 'http://localhost',
      pageReferrerUrl: 'http://localhost',
      price: '123',
      quantity: '1',
      contentType: 'product',
      contentId: 'test_content_id',
      contentCategory: 'test_category',
      contentName: 'test_content_name',
      currency: 'USD',
      value: '123',
      description: 'test_description',
      query: 'test_query',
      status: 'test_status'
    };

    const utils = {
      fetch: fetch,
      getSettings: () => settings,
      getExtensionSettings: () => extensionSettings
    };

    return sendEapiData({ utils }).then(() => {
      expect(fetch).toHaveBeenCalledWith(pixelTrackEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': extensionSettings.accessToken
        },
        body: {
          pixel_code: extensionSettings.pixelCode,
          event: settings.event,
          event_id: settings.eventId,
          timestamp: settings.timestamp,
          partner_name: 'Adobe',
          context: {
            ad: {
              callback: settings.ttclid
            },
            page: {
              url: settings.pageUrl,
              referrer: settings.pageReferrerUrl
            },
            user: {
              external_id: settings.externalId,
              phone_number:
                '7f459725e1f658720fd2c41b71737eb3aef333edd9a96704cbddb5b884f0e129',
              email:
                'f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a',
              ttp: settings.ttp
            },
            user_agent: settings.userAgent,
            ip: settings.ip
          },
          properties: {
            contents: [
              {
                price: settings.price,
                quantity: settings.quantity,
                content_type: settings.contentType,
                content_id: settings.contentId,
                content_category: settings.contentCategory,
                content_name: settings.contentName
              }
            ],
            currency: settings.currency,
            value: settings.value,
            description: settings.description,
            query: settings.query,
            status: settings.status
          }
        }
      });
    });
  });
});
