import { UuidValueObject } from '../value-objects/uuid'

export abstract class DomainEvent {
  static EVENT_NAME: string
  static fromPrimitives: (params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: DomainEventAttributes
  }) => DomainEvent

  readonly aggregateId: string
  readonly eventId: string
  readonly occurredOn: Date
  readonly eventName: string

  constructor(params: {
    eventName: string
    aggregateId: string
    eventId?: string
    occurredOn?: Date
  }) {
    const { aggregateId, eventName, eventId, occurredOn } = params
    this.aggregateId = aggregateId
    this.eventId = eventId || UuidValueObject.random().value
    this.occurredOn = occurredOn || new Date()
    this.eventName = eventName
  }

  abstract toPrimitives(): DomainEventAttributes
}

type DomainEventAttributes = { [key: string]: unknown }
