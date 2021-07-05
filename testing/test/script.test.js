const googleSearch = require('./script');

dbMock = ['dog.com', 'doghunters.com', 'mouse.com', 'elephant.com'];

describe('googleSearch', () => {
  it('is a dummy test', () => {
    expect('hello').toEqual('hello');
  });

  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'doghunters.com']);
  });

  it('works for undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});

