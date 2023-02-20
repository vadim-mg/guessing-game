class GuessingGame {
  constructor(min = 0, max = 0, last = 0) {}

  setRange(min, max) {
    this.min = min
    this.max = max
    this.last = Math.ceil((this.max + this.min) / 2)
  }

  guess() {
    this.last = Math.ceil((this.max + this.min) / 2)
    return this.last
  }

  lower() {
    this.max = this.last
  }

  greater() {
    this.min = this.last
  }
}

module.exports = GuessingGame
