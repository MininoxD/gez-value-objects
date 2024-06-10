import { DomainEvent } from './domainEvent'

export abstract class EventBus {
  abstract publish(events: DomainEvent[]): Promise<void>
}
