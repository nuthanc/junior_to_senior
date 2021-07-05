const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'doghunters.com',
  'mouse.com',
  'elephant.com'
]

it('this is a dummy test', () => {
  expect('hello').toEqual('hello');
});

it('this is a sample test', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'doghunters.com']);
});