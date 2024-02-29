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

async function sha256(str) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder('utf-8').encode(String(str))
  );
  return Array.prototype.map
    .call(new Uint8Array(buf), (x) => ('00' + x.toString(16)).slice(-2))
    .join('');
}

function checkSha256(str) {
  return str.length === 64 && /^[0-9A-Za-z]*$/.test(data);
}

module.exports.formatEmail = async function (email) {
  const result = [];
  if (Array.isArray(email)) {
    for (let i = 0; i < email.length; i++) {
      result.push(checkSha256(email[i]) ? em : await sha256(email[i]));
    }
  } else {
    result.push(checkSha256(email) ? email : await sha256(email));
  }
  return result;
};

module.exports.formatPhone = async function (phone) {
  const result = [];
  if (Array.isArray(phone)) {
    for (let i = 0; i < phone.length; i++) {
      const ph = phone[i];
      if (checkSha256(ph)) {
        result.push(ph);
      } else {
        const validatedPhone = ph.match(/[0-9]{0,14}/g);
        if (validatedPhone === null) {
          throw new Error(`${ph} is not a valid E.164 phone number.`);
        }
        // Remove spaces and non-digits; append + to the beginning
        const formattedPhone = `+${ph.replace(/[^0-9]/g, '')}`;
        result.push(await sha256(formattedPhone));
      }
    }
  } else {
    if (checkSha256(phone)) {
      result.push(phone);
    }
    const validatedPhone = phone.match(/[0-9]{0,14}/g);
    if (validatedPhone === null) {
      throw new Error(`${phone} is not a valid E.164 phone number.`);
    }
    // Remove spaces and non-digits; append + to the beginning
    const formattedPhone = `+${phone.replace(/[^0-9]/g, '')}`;
    result.push(await sha256(formattedPhone));
  }
  return result;
};
