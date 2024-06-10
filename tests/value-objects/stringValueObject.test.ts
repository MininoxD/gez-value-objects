import { InvalidArgumentError } from '../../src/value-objects/invalidArgumentError'
import { TaskDescription } from './__mock__/taskDescription'
import { TaskName } from './__mock__/taskName'

describe('StringValueObject', () => {
  it('should create a valid string value object', () => {
    const validName = 'Task name'
    const taskName = new TaskName(validName)
    expect(taskName.toString()).toBe(validName)
  })

  it('should throw an error if the string is null', () => {
    const invalidName = null
    // @ts-expect-error Testing invalid input
    expect(() => new TaskName(invalidName)).toThrow(InvalidArgumentError)
  })

  it('should throw an error if the string is undefined', () => {
    const invalidName = undefined
    // @ts-expect-error Testing invalid input
    expect(() => new TaskName(invalidName)).toThrow(InvalidArgumentError)
  })

  it('should return the value of the string', () => {
    const validName = 'Task name'
    const taskName = new TaskName(validName)
    expect(taskName.toString()).toBe(validName)
  })

  it('should compare two string value objects', () => {
    const validName = 'Task name'
    const taskName = new TaskName(validName)
    const sameTaskName = new TaskName(validName)
    const differentTaskName = new TaskName('Different task name')
    expect(taskName.equals(sameTaskName)).toBe(true)
    expect(taskName.equals(differentTaskName)).toBe(false)
  })

  it('should compare two value objects with the same value but different types', () => {
    const validName = 'Task name'
    const taskName = new TaskName(validName)
    const sameTaskName = new TaskDescription(validName)
    expect(taskName.equals(sameTaskName)).toBe(false)
  })
})
