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

/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Content, ContextualHelp, Heading } from '@adobe/react-spectrum';

export default () => [
  [
    'contents',
    'Contents',
    '[Required for Video Shopping Ads (VSA)] Relevant products in an event with ' +
      'product information.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <table>
            <tr>
              <th>Field</th>
              <th>Data Type</th>
              <th>Description</th>
              <th>Required for reporting ROAS or for VBO</th>
              <th>Required for VSA</th>
            </tr>
            <tr>
              <td>price</td>
              <td>float</td>
              <td>
                The price of the item. <code>price</code> price specifies the
                price for a single item, and <code>value</code> specifies the
                total price of the order.
              </td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>quantity</td>
              <td>integer</td>
              <td>The number of items.</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>content_id</td>
              <td>string</td>
              <td>
                &#91;Required for VSA&#93; Unique ID of the product or content.{' '}
                We recommend using <code>sku_id</code> or{' '}
                <code>item_group_id</code> if you have one. If you have set up{' '}
                <code>sku_id</code> or <code>item_group_id</code> in the
                catalog, the ID should match the <code>sku_id</code> or{' '}
                <code>item_group_id</code>.
              </td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>content_category</td>
              <td>string</td>
              <td>Category of the page or product.</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>brand</td>
              <td>string</td>
              <td>Brand name of the product item.</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </table>
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'contentType',
    'Content Type',
    '[Required for Video Shopping Ads (VSA)] The type of content in the event. ' +
      'Enum values: "product", "product_group".',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <ul>
            <li>
              When the <code>content_id</code> in the <code>contents</code>{' '}
              parameter is specified as <code>sku_id</code>, set this field to{' '}
              <code>product</code>.
            </li>
            <li>
              When the <code>content_id</code> in the <code>contents</code>{' '}
              parameter is specified as <code>item_group_id</code>, set this
              field to <code>product_group</code>.
            </li>
          </ul>
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'currency',
    'Currency',
    '[Required for reporting Return on Ad Spend (ROAS) or for Value-based ' +
      'Optimization (VBO)]ISO 4217 currency code.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>Recommended for revenue related events.</strong>
        </p>
        <p>
          <strong>List of currencies currently supported:</strong> AED, ARS,
          AUD, BDT, BHD, BIF, BOB, BRL, CAD, CHF, CLP, CNY, COP, CRC, CZK, DKK,
          DZD, EGP, EUR, GBP, GTQ, HKD, HNL, HUF, IDR, ILS, INR, ISK, JPY, KES,
          KHR, KRW, KWD, KZT, MAD, MOP, MXN, MYR, NGN, NIO, NOK, NZD, OMR, PEN,
          PHP, PHP, PKR, PLN, PYG, QAR, RON, RUB, SAR, SEK, SGD, THB, TRY, TWD,
          UAH, USD, VES, VND, ZAR.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'value',
    'Value',
    '[Required for reporting Return on Ad Spend (ROAS) or for Value-based ' +
      'Optimization (VBO)]Value of the order or items sold.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>Recommended for revenue related events.</strong>
        </p>
        <p>
          The value should always be formatted as an integer or decimal (for
          instance, 10.00) regardless of the location, currency, or other
          factors. It should not contain any currency symbols, special
          characters, letters, or commas.
        </p>
        <p>
          <strong>Note</strong>: <code>price</code> specifies the price for a
          single item, and <code>value</code> specifies the total price of the
          order. For example, if you have two items each sold for ten dollars,
          the <code>price</code> parameter would be <code>10.00</code> and the{' '}
          <code>value</code> parameter would be <code>20.00</code>.
        </p>
      </Content>
    </ContextualHelp>
  ],
  ['description', 'Description', 'Description of the item or page.', false],
  [
    'query',
    'Query',
    'The text string that was input by a user.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          For instance, if a user searches for a product on your website, you
          can forward the keyword being searched. If a user enters a coupon code
          at checkout, you can forward the code.
        </p>
      </Content>
    </ContextualHelp>
  ],
  ['orderId', 'Order ID', 'Order ID of the transaction.', false],
  ['shopId', 'Shop ID', 'Shop ID of the transaction."', false],
  [
    'price',
    '[Deprecated] Price',
    'The price of the item. Example: 25',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please use <code>contents</code> array mapping to send product
          information.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'quantity',
    '[Deprecated] Quantity',
    'Number of item. Example: 4',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please use <code>contents</code> array mapping to send product
          information.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'contentId',
    '[Deprecated] Content ID',
    'ID of the product item. Example: 1077218',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please use <code>contents</code> array mapping to send product
          information.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'contentCategory',
    '[Deprecated] Content Category',
    'Category of the page/product. Example: "apparel"',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please use <code>contents</code> array mapping to send product
          information.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'contentName',
    '[Deprecated] Content Name',
    'Name of the page/product. Example: "shirt"',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please use <code>contents</code> array mapping to send product
          information.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'status',
    '[Deprecated] Status',
    'Status of an order, item, or service. Example: "submitted"',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          Please use <code>contents</code> array mapping to send product
          information.
        </p>
      </Content>
    </ContextualHelp>
  ]
];
