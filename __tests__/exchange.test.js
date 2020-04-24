import { verifyInput } from  "./../src/exchange";
import { attemptAlchemy } from  "./../src/exchange";

describe ("VerifyInput", () => {
  test("should return an error if a value is negative", () => {
    let negativeNum = verifyInput(-1);
    expect(negativeNum).toEqual(false);
  });

  test("should return an error if a value is zero", () => {
    let zeroInput = verifyInput(0);
    expect(zeroInput).toEqual(false);
  });

  test("should return an error if a value is not a number", () => {
    let nanInput = verifyInput("abc?");
    expect(nanInput).toEqual(false);
  });

  test("should return true if a value is a positive number", () => {
    let validInput = verifyInput(11.00);
    expect(validInput).toEqual(true);
  });
});

describe ("AttemptAlchemy", () => {
  test("should return an error if human transmutation is attempted", () => {
    expect(attemptAlchemy("human", 10, 1000)).toEqual("HUMAN TRANSMUTATION IS FORBIDDEN!");
  });
});
