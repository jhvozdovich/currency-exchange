import { verifyInput } from  "./../src/exchange";

describe ("VerifyInput", () => {
  test("should return an error if a value is negative", () => {
    let negativeNum = verifyInput(-1);
    expect(negativeNum).toEqual(false);
  });
});