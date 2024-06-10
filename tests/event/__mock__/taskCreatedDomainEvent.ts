import { DomainEvent } from '../../../src/event/domainEvent'

export type TaskCreatedDomainEventAttributes = {
  taskId: string
}
export class TaskCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'task.created'
  readonly attributes: TaskCreatedDomainEventAttributes

  constructor(params: {
    aggregateId: string
    attributes: TaskCreatedDomainEventAttributes
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: TaskCreatedDomainEvent.EVENT_NAME,
      aggregateId: params.aggregateId,
      eventId: params.eventId,
      occurredOn: params.occurredOn,
    })
    this.attributes = params.attributes
  }

  toPrimitives(): TaskCreatedDomainEventAttributes {
    return this.attributes
  }
}
