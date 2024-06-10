import { v4, validate } from 'uuid'

import { InvalidArgumentError } from './invalidArgumentError'

export class UuidValueObject {
  readonly value: string
  constructor(value: string) {
    this.ensureIsValidUuid(value)
    this.value = value
  }

  private ensureIsValidUuid(value: string): void {
    const isValid = validate(value)
    if (!isValid) {
      throw new InvalidArgumentError(
        `${this.constructor.name} Does not allow the value ${this.value}`
      )
    }
  }

  static random(): UuidValueObject {
    return new UuidValueObject(v4())
  }

  toString(): string {
    return this.value
  }
}
