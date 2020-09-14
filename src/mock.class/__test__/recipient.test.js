import VaccineTest from "../vaccineTest";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

describe("acceptInjection", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("should hasAntibodies be false if vaccine not contain Virus Proteins", () => {
    // TODO 17: add test here
    mockGetHasAntibodies.mockReturnValue(true);
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toEqual("Vaccine Test Success");
  });

  test("should hasAntibodies be true if vaccine contain Virus Proteins", () => {
    // TODO 18: add test here
    mockGetHasAntibodies.mockReturnValue(false);
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toEqual("Vaccine Test Failed");
  });
});
