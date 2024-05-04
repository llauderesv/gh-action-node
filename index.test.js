const dataSrc = require('./dataSource');

describe('RestAPITest', () => {
  it('should return data', () => {
    expect(dataSrc).toHaveLength(2);
  });
});
