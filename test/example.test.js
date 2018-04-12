const expect = require('chai').expect;
require('chai').should();

import example from '../src/example';

describe('Node Starter', function () {

  it('runs', function (done) {
    (typeof (() => console.log())).should.eq('function');

    example().then((response) => {
      expect(response).to.have.property('text');
      response.text.should.eq('hello');
      done()
    })
  })

});