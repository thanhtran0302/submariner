export default class RingBuffer<T = number> {
  private _buffer: T[] = [];
  private _size: number = 0;
  private _readIdx: number = 0;
  private _writeIdx: number = 0;

  constructor(size: number) {
    this._size = size;
  }

  public read(): T {
    const idx: number = this._readIdx % this._size;

    this._readIdx++;
    return this._buffer[idx];
  }

  public write(value: T) {
    const idx: number = this._writeIdx % this._size;

    this._writeIdx++;
    this._buffer[idx] = value;
  }
}
