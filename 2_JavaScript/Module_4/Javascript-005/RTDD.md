RTDD, in short, is a simplified process of writing code that will satisfy some requirements. 


The RTDD test is executed before implementing functional requirements. You therefore write a test for a feature to be compiled, before it is compiled.

- - - - - - - - - - - - - - - - - -

TDD is a development methodology where you first write a test that fails → then write the minimum code to make it pass → then improve the code.

The cycle is always:

RED → write a test that fails

GREEN → write the minimum code to make it pass

REFACTOR → clean up and improve the code

- - - - - - - - - - - - - - - - - -

- - -| Phases | - - -

- We have this test:
test('statusOfKeys exists', () => {
  expect(statusOfKeys).toBeDefined()
})


- We have the empty function:
function statusOfKeys() {}

If the function is not defined, the test fails with:
ReferenceError: statusOfKeys is not defined
If it fails we are in the RED phase.

- We write the minimum code necessary to pass the test:
function statusOfKeys() {}

Now the test passes, we are in the GREEN phase.


