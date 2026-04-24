export class Random {
  private x: number;
  private y: number;
  private z: number;
  private w: number;

  constructor(seed: number) {
    this.x = 72888400;
    this.y = 362436069;
    this.z = 521288629;
    this.w = seed;
  }

  // XorShift
  next() {
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    this.w = this.w ^ (this.w >> 19) ^ (t ^ (t >> 8));
    return this.w;
  }

  nextInt(min: number, max: number) {
    return min + (this.next() % (max - min + 1));
  }
}
