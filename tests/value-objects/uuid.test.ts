import { InvalidArgumentError } from '../../src/value-objects/invalidArgumentError'
import { UuidValueObject } from '../../src/value-objects/uuid'
import { TaskId } from './__mock__/taskId'
import { v4 } from 'uuid'
describe('Uuid value object', () => {
  it('should create a valid UUID from a string', () => {
    const validUuid = v4()
    const uuidValueObject = new TaskId(validUuid)
    expect(uuidValueObject.toString()).toBe(validUuid)
  })

  it('should throw an error if the UUID is invalid', () => {
    const invalidUuid = 'invalid-uuid'
    expect(() => new TaskId(invalidUuid)).toThrow(InvalidArgumentError)
  })

  it('should create a random UUID', () => {
    const taskId = TaskId.random()
    expect(taskId).toBeInstanceOf(UuidValueObject)
  })

  it('should return the value of the UUID', () => {
    const validUuid = v4()
    const uuidValueObject = new TaskId(validUuid)
    expect(uuidValueObject.toString()).toBe(validUuid)
  })
})
