const shallowObjClone = require('./shallowObjClone');

test('Create clone of the object parameter', () => {
  const myObj = { person: 'Hitchhiker', number: 42 };

  expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
