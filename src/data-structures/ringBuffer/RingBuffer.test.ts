import RingBuffer from './RingBuffer';

describe('RingBuffer', () => {
  it('should fill buffer', () => {
    const buffer = new RingBuffer(3);

    buffer.write(1);
    buffer.write(2);
    buffer.write(3);
    expect(buffer.read()).toEqual(1);
    expect(buffer.read()).toEqual(2);
    expect(buffer.read()).toEqual(3);
  });

  it('should erase old value', () => {
    const buffer = new RingBuffer(3);

    buffer.write(1);
    buffer.write(2);
    buffer.write(3);
    expect(buffer.read()).toEqual(1);
    expect(buffer.read()).toEqual(2);
    expect(buffer.read()).toEqual(3);
    buffer.write(4);
    expect(buffer.read()).toEqual(4);
  });

  it('should read first value', () => {
    const buffer = new RingBuffer(3);

    buffer.write(1);
    buffer.write(2);
    buffer.write(3);
    expect(buffer.read()).toEqual(1);
    expect(buffer.read()).toEqual(2);
    expect(buffer.read()).toEqual(3);
    expect(buffer.read()).toEqual(1);
  });
});
