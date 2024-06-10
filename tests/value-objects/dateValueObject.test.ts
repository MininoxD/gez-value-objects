import { InvalidArgumentError } from '../../src/value-objects/invalidArgumentError'
import { TaskDueDate } from './__mock__/taskDueDate'

describe('DateValueObject', () => {
  it('should create a valid date value object', () => {
    const validDate = new Date()
    const dueDate = new TaskDueDate(validDate)
    expect(dueDate.value).toBe(validDate)
  })

  it('should throw an error if the date is null', () => {
    const invalidDate = null
    // @ts-expect-error Testing invalid input
    expect(() => new TaskDueDate(invalidDate)).toThrow(InvalidArgumentError)
  })

  it('should throw an error if the date is undefined', () => {
    const invalidDate = undefined
    // @ts-expect-error Testing invalid input
    expect(() => new TaskDueDate(invalidDate)).toThrow(InvalidArgumentError)
  })

  it('should return string value of the date', () => {
    const validDate = new Date()
    const dueDate = new TaskDueDate(validDate)
    expect(dueDate.toString()).toBe(validDate.toString())
  })

  it('should compare two date value objects', () => {
    const validDate = new Date()
    const dueDate = new TaskDueDate(validDate)
    const sameDueDate = new TaskDueDate(validDate)
    const differentDueDate = new TaskDueDate(new Date(validDate.getTime() + 1))
    expect(dueDate.equals(sameDueDate)).toBe(true)
    expect(dueDate.equals(differentDueDate)).toBe(false)
  })
})
