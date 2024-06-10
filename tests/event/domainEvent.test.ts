import { validate } from 'uuid'
import { TaskId } from '../value-objects/__mock__/taskId'
import { TaskCreatedDomainEvent } from './__mock__/taskCreatedDomainEvent'
import { UuidValueObject } from '../../src/value-objects/uuid'

describe('DomainEvent', () => {
  it('should create a valid domain event', () => {
    const taskId = TaskId.random()

    const domainEvent = new TaskCreatedDomainEvent({
      aggregateId: taskId.value,
      attributes: {
        taskId: taskId.value,
      },
    })
    expect(domainEvent.aggregateId).toBe(taskId.value)
    expect(domainEvent.attributes.taskId).toBe(taskId.value)
    expect(domainEvent.eventName).toBe(TaskCreatedDomainEvent.EVENT_NAME)
    expect(domainEvent.occurredOn).toBeDefined()
    expect(domainEvent.eventId).toBeDefined()
    expect(domainEvent.occurredOn).toBeInstanceOf(Date)
    expect(validate(domainEvent.eventId)).toBe(true)
  })

  it('should create a valid domain event with custom event id and occurred on', () => {
    const taskId = TaskId.random()
    const eventId = UuidValueObject.random().value
    const occurredOn = new Date()

    const domainEvent = new TaskCreatedDomainEvent({
      aggregateId: taskId.value,
      attributes: {
        taskId: taskId.value,
      },
      eventId,
      occurredOn,
    })
    expect(domainEvent.aggregateId).toBe(taskId.value)
    expect(domainEvent.attributes.taskId).toBe(taskId.value)
    expect(domainEvent.eventName).toBe(TaskCreatedDomainEvent.EVENT_NAME)
    expect(domainEvent.occurredOn).toBe(occurredOn)
    expect(domainEvent.eventId).toBe(eventId)
  })

  it('should return domain event attributes', () => {
    const taskId = TaskId.random()
    const attributes = {
      taskId: taskId.value,
    }
    const domainEvent = new TaskCreatedDomainEvent({
      aggregateId: taskId.value,
      attributes,
    })
    expect(domainEvent.toPrimitives()).toEqual(attributes)
  })
})
