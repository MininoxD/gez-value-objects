import { EventBusMock } from './__mock__/eventBusMock'
import { TaskCreatedDomainEvent } from './__mock__/taskCreatedDomainEvent'

describe('EventBus', () => {
  let eventBus: EventBusMock
  beforeEach(() => {
    eventBus = new EventBusMock()
  })
  it('should publish domain events', async () => {
    const taskCreatedDomainEvent = new TaskCreatedDomainEvent({
      aggregateId: '1',
      attributes: {
        taskId: '1',
      },
    })
    await eventBus.publish([taskCreatedDomainEvent])
    eventBus.assertPublishCalledWith([taskCreatedDomainEvent])
  })
})
