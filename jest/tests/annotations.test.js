beforeAll(() => {
  testit.title('Setup test');
});

beforeEach(() => {
  testit.title("Add namespace from annotation");
  testit.namespace("Test adapter jest");
})

test('without annotations success', () => {
  expect(true).toBe(true);
});

test('without annotations failed', () => {
  expect(true).toBe(false);
});

test('externalId Annotation success', () => {
  testit.externalId('externalIdAnnotation_success');

  expect(true).toBe(true);
});

test('externalId Annotation failed', () => {
  testit.externalId('externalIdAnnotation_failed');

  expect(true).toBe(false);
});

test('displayName Annotation success', () => {
  testit.displayName('set displayName Annotation success');

  expect(true).toBe(true);
});

test('displayName Annotation failed', () => {
  testit.displayName('displayName Annotation failed');

  expect(true).toBe(false);
});

test('title Annotation success', () => {
  testit.title('set title Annotation success');

  expect(true).toBe(true);
});

test('title Annotation failed', () => {
  testit.title('title Annotation failed');

  expect(true).toBe(false);
});

test('description Annotation success', () => {
  testit.description('description Annotation success');

  expect(true).toBe(true);
});

test('description Annotation failed', () => {
  testit.description('description Annotation failed');

  expect(true).toBe(false);
});

test('labels Annotation success', () => {
  testit.labels(['Label1', 'Label2']);

  expect(true).toBe(true);
});

test('labels Annotation failed', () => {
  testit.labels(['Label1', 'Label2']);

  expect(true).toBe(false);
});

test('links Annotation success', () => {
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  expect(true).toBe(true);
});

test('links Annotation failed', () => {
  testit.links([
    { url: 'https://test01.example', title: 'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title: 'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  expect(true).toBe(false);
});

test('workItemIds Annotation success', () => {
  testit.workItemIds(["123", "321"]);

  expect(true).toBe(true);
});

test('workItemIds Annotation failed', () => {
  testit.workItemIds(["123", "321"]);

  expect(true).toBe(false);
});

test('with All Annotations success', () => {
  testit.externalId('withAllAnnotations_success');
  testit.displayName('with All Annotations success DisplayName');
  testit.title('with All Annotations success Title');
  testit.description('with All Annotations success');
  testit.labels(['Label1', 'Label2']);
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);
  testit.workItemIds(["123", "321"]);

  expect(true).toBe(true);
});

test('with All Annotations failed', () => {
  testit.externalId('withAllAnnotations_failed');
  testit.displayName('with All Annotations failed DisplayName');
  testit.title('with All Annotations failed Title');
  testit.description('with All Annotations failed');
  testit.labels(['Label1', 'Label2']);
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);
  testit.workItemIds(["123", "321"]);

  expect(true).toBe(false);
});

test.each([1, 2, 3, 4])('with Primitive params %i', (number) => {
  testit.params(number);
  expect(number).toBe(number);
});

test.each`
a    | b    | expected  
${1} | ${1} | ${2}  
${1} | ${2} | ${3}  
${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({a, b, expected}) => {
  expect(a + b).toBe(expected);
});

test.each([
  {
    a: 1,
    b: 2,
    sum: 3,
  },
  {
    a: 3,
    b: 3,
    sum: 6,
  },
])('with Object params %s', (params) => {
  testit.params(params);
  expect(params.a + params.b).toBe(params.sum);
});

afterAll(() => {
  testit.title('Teardown test');
});
