import { DomainEvent } from '../../../src/event/domainEvent'
import { EventBus } from '../../../src/event/eventBus'

export class EventBusMock extends EventBus {
  publishMock = jest.fn()
  async publish(events: DomainEvent[]): Promise<void> {
    this.publishMock(events)
  }

  assertPublishCalledWith(events: DomainEvent[]): void {
    expect(this.publishMock).toHaveBeenCalledWith(events)
  }
}
