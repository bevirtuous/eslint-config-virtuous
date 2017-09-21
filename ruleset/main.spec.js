/**
 * Copyright (c) 2017, Affinata. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const main = require('./main');

describe('Main', () => {
  it('should extend "airbnb"', () => {
    expect(main.extends).toEqual('airbnb');
  });
});
