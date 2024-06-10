import { InvalidArgumentError } from '../../src/value-objects/invalidArgumentError'
import { TaskPriority } from './__mock__/taskPriority'

describe('NumberValueObject', () => {
  it('should create a valid number value object', () => {
    const validNumber = 1
    const taskPriority = new TaskPriority(validNumber)
    expect(taskPriority.value).toBe(validNumber)
  })

  it('should throw an error if the number is null', () => {
    const invalidNumber = null
    // @ts-expect-error Testing invalid input
    expect(() => new TaskPriority(invalidNumber)).toThrow(InvalidArgumentError)
  })

  it('should throw an error if the number is undefined', () => {
    const invalidNumber = undefined
    // @ts-expect-error Testing invalid input
    expect(() => new TaskPriority(invalidNumber)).toThrow(InvalidArgumentError)
  })

  it('should return string value of the number', () => {
    const validNumber = 1
    const taskPriority = new TaskPriority(validNumber)
    expect(taskPriority.toString()).toBe(validNumber.toString())
  })

  it('should compare two number value objects', () => {
    const validNumber = 1
    const taskPriority = new TaskPriority(validNumber)
    const sameTaskPriority = new TaskPriority(validNumber)
    const differentTaskPriority = new TaskPriority(2)
    expect(taskPriority.equals(sameTaskPriority)).toBe(true)
    expect(taskPriority.equals(differentTaskPriority)).toBe(false)
  })
})
