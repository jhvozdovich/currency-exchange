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
    expect(attemptAlchemy(1101000, 10, 1000)).toEqual("HUMAN TRANSMUTATION IS FORBIDDEN!");
  });
  test("should return an error if gold is made without gold starting materials", () => {
    expect(attemptAlchemy(1000, 10, 1100111)).toEqual("Sorry, only the rich get richer!");
  });
  test("should return an error if gold is used as a starting material to not make gold", () => {
    expect(attemptAlchemy(1100111, 10, 15)).toEqual("Why are you wasting perfectly good gold??");
  });
  test("should return an error if gold is used as a starting material to make gold", () => {
    expect(attemptAlchemy(1100111, 10,1100111)).toEqual("You know this doesn't actually make more gold right? You just got stuff all over it.");
  });
  test("if added starting values are greater than or equal to the outcome, equivalent exchange is achieved", () => {
    expect(attemptAlchemy(10, 10, 15)).toEqual("Congratulations! This is equivalent exchange!");
  });
  test("if added starting values are less than the outcome, equivalent exchange is not achieved", () => {
    expect(attemptAlchemy(10, 10, 100)).toEqual("Try again! This is not equivalent exchange!");
  });
});
