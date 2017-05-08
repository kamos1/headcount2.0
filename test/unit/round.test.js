
import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('Test round function', () =>  {
  const district = new DistrictRepository(kinderData);

  test('cleaner is a function', () => {
    expect(district.round).toBeInstanceOf(Function)
  });

  test('returns a positive number rounded to 3rd decimal', () => {
    const value = district.round(.6784);
    expect(value).toEqual(.678);
  })

  test('returns a negative number rounded to 3rd decimal', () => {
    const value = district.round(-.6784);
    expect(value).toEqual(-.678);
  })
});
