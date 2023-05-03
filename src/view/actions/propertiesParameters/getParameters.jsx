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
    'price',
    'Price',
    'The price of the item. Example: 25',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>Note:</strong> <strong>Price</strong> is the price for a
          single item, and <strong>value</strong> is the total price of the
          order. For example, if you have two items each sold for $10, the{' '}
          <strong>price</strong> parameter would pass <strong>10</strong> and
          the value parameter would pass <strong>20</strong>.
        </p>
      </Content>
    </ContextualHelp>
  ],
  ['quantity', 'Quantity', 'Number of item. Example: 4', false],
  [
    'contentType',
    'Content Type',
    'The property\'s value must be set to either "product" or "product_group", ' +
      'depending on how you will configure your data feed when you set up your ' +
      'product catalog.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          If you will be tracking events associated with individual products,
          set the value to{' '}
          <strong>
            <code>product</code>
          </strong>
          . If you are tracking events associated with product groups, set it to{' '}
          <strong>
            <code>product_group</code>
          </strong>{' '}
          instead.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'contentId',
    'Content ID',
    'ID of the product item. Example: 1077218',
    false
  ],
  [
    'contentCategory',
    'Content Category',
    'Category of the page/product. Example: "apparel"',
    false
  ],
  [
    'contentName',
    'Content Name',
    'Name of the page/product. Example: "shirt"',
    false
  ],
  [
    'currency',
    'Currency',
    'ISO 4217 currency code. Example: USD',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
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
    'Value of the order or items sold. Example: 100',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          <strong>Note:</strong> <strong>Price</strong> is the price for a
          single item, and <strong>value</strong> is the total price of the
          order. For example, if you have two items each sold for $10, the{' '}
          <strong>price</strong> parameter would pass <strong>10</strong> and
          the value parameter would pass <strong>20</strong>.
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'description',
    'Description',
    'Description of the item or page. Example: "Lightweight cotton"',
    false
  ],
  [
    'query',
    'Query',
    'The text string that was searched for. For instance, a person searches for a product on ' +
      'your website, you can forward the keyword being searched here.',
    false,
    <ContextualHelp>
      <Heading>Tip</Heading>
      <Content>
        <p>
          If a person enters a coupon code at check out, you can forward the
          code. Example: &quot;SAVE10COUPON&quot;
        </p>
      </Content>
    </ContextualHelp>
  ],
  [
    'status',
    'Status',
    'Status of an order, item, or service. Example: "submitted"',
    false
  ]
];
