import { verifyInput } from  "./../src/exchange";

describe ("VerifyInput", () => {
  test("should return an error if a value is negative", () => {
    let negativeNum = verifyInput(-1);
    expect(negativeNum).toEqual(false);
  });

  test("should return an error if a value is zero", () => {
    let negativeNum = verifyInput(0);
    expect(negativeNum).toEqual(false);
  });

  test("should return an error if a value is not a number", () => {
    let negativeNum = verifyInput("abc?");
    expect(negativeNum).toEqual(false);
  });
});