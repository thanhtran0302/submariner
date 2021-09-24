import { reduce } from './Reduce';

describe('reduce function', () => {
  const sumFn = (prevValue: number, currentValue: number) =>
    prevValue + currentValue;
  const averageFn = (
    prevValue: number,
    currentValue: number,
    index: number,
    array: number[]
  ) => {
    const sum: number = prevValue + currentValue;
    if (index === array.length - 1) {
      return sum / array.length;
    }
    return sum;
  };
  const uniqValues = (prevValue: number[], currentValue: number) => {
    if (!prevValue.includes(currentValue)) {
      prevValue.push(currentValue);
    }
    return prevValue;
  };

  it('should sum values from array without initial value', () => {
    const array: number[] = [1, 2, 3, 4, 5];

    expect(reduce<number, number>(array, sumFn)).toEqual(15);
  });

  it('should sum values from array with initial value', () => {
    const array: number[] = [1, 2, 3, 4, 5];

    expect(reduce<number, number>(array, sumFn, 10)).toEqual(25);
  });

  it('should compute average values from array without initial value', () => {
    const array: number[] = [1, 2, 3, 4, 5];

    expect(reduce<number, number>(array, averageFn)).toEqual(3);
  });

  it('should compute average values from array with initial value', () => {
    const array: number[] = [1, 2, 3, 4, 5];

    expect(reduce<number, number>(array, averageFn, 10)).toEqual(5);
  });

  it('should remove duplicates from an array', () => {
    const array: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7, 10, 10, 33, 44, 44];

    expect(reduce<number, number[]>(array, uniqValues, [])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 10, 33, 44,
    ]);
  });

  it('should remove duplicates from an array with initial values', () => {
    const array: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7, 10, 10, 33, 44, 44];

    expect(reduce<number, number[]>(array, uniqValues, [33])).toEqual([
      33, 1, 2, 3, 4, 5, 6, 7, 10, 44,
    ]);
  });

  it('should group objects by property', () => {
    interface Student {
      name: string;
      score: number;
    }
    interface Exam {
      fail: Student[];
      pass: Student[];
    }

    const students: Student[] = [
      { name: 'Lucas', score: 12 },
      { name: 'Valentin', score: 8 },
      { name: 'Hugo', score: 18 },
      { name: 'Chris', score: 3 },
    ];
    const intialValue: Exam = {
      fail: [],
      pass: [],
    };

    expect(
      reduce<Student, Exam>(
        students,
        (prevValue: Exam, currentValue: Student) => {
          currentValue.score > 10
            ? prevValue.pass.push(currentValue)
            : prevValue.fail.push(currentValue);
          return prevValue;
        },
        intialValue
      )
    ).toEqual({
      fail: [
        { name: 'Valentin', score: 8 },
        { name: 'Chris', score: 3 },
      ],
      pass: [
        { name: 'Lucas', score: 12 },
        { name: 'Hugo', score: 18 },
      ],
    });
  });

  it('should flatten an array', () => {
    const array: number[][] = [
      [12, 34],
      [23, 54],
      [43, 12],
      [75, 66],
    ];

    expect(
      reduce<number[], number[]>(
        array,
        (prevValue: number[], currentValue: number[]) =>
          prevValue.concat(currentValue),
        []
      )
    ).toEqual([12, 34, 23, 54, 43, 12, 75, 66]);
  });

  it('should return 0 on an empty array and 0 as initial value', () => {
    expect(reduce<number, number>([], sumFn, 0)).toEqual(0);
  });

  it('should throw an error on an empty array and without initial value', () => {
    expect(() => reduce<number, number>([], sumFn)).toThrow(
      'Reduce of empty array with no initial value'
    );
  });
});
