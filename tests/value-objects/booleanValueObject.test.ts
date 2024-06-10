import { InvalidArgumentError } from '../../src/value-objects/invalidArgumentError'
import { TaskCompleted } from './__mock__/taskCompleted'

describe('BooleanValueObject', () => {
  it('should create a valid boolean value object', () => {
    const validBoolean = true
    const taskCompleted = new TaskCompleted(validBoolean)
    expect(taskCompleted.value).toBe(validBoolean)
  })

  it('should throw an error if the boolean is null', () => {
    const invalidBoolean = null
    // @ts-expect-error Testing invalid input
    expect(() => new TaskCompleted(invalidBoolean)).toThrow(
      InvalidArgumentError,
    )
  })

  it('should throw an error if the boolean is undefined', () => {
    const invalidBoolean = undefined
    // @ts-expect-error Testing invalid input
    expect(() => new TaskCompleted(invalidBoolean)).toThrow(
      InvalidArgumentError,
    )
  })

  it('should return string value of the boolean', () => {
    const validBoolean = true
    const taskCompleted = new TaskCompleted(validBoolean)
    expect(taskCompleted.toString()).toBe(validBoolean.toString())
  })

  it('should compare two boolean value objects', () => {
    const validBoolean = true
    const taskCompleted = new TaskCompleted(validBoolean)
    const sameTaskCompleted = new TaskCompleted(validBoolean)
    const differentTaskCompleted = new TaskCompleted(false)
    expect(taskCompleted.equals(sameTaskCompleted)).toBe(true)
    expect(taskCompleted.equals(differentTaskCompleted)).toBe(false)
  })
})
