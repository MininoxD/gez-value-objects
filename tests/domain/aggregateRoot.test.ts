import { TaskCreatedDomainEvent } from '../event/__mock__/taskCreatedDomainEvent'
import { Task } from '../value-objects/__mock__/task'
import { TaskCompleted } from '../value-objects/__mock__/taskCompleted'
import { TaskDescription } from '../value-objects/__mock__/taskDescription'
import { TaskDueDate } from '../value-objects/__mock__/taskDueDate'
import { TaskId } from '../value-objects/__mock__/taskId'
import { TaskName } from '../value-objects/__mock__/taskName'
import { TaskPriority } from '../value-objects/__mock__/taskPriority'

describe('AggregateRoot', () => {
  let task: Task
  beforeEach(() => {
    const id = TaskId.random()
    const name = new TaskName('Task 1')
    const description = new TaskDescription('Description')
    const dueDate = new TaskDueDate(new Date())
    const completed = new TaskCompleted(false)
    const priority = new TaskPriority(1)

    task = new Task({
      id,
      name,
      description,
      dueDate,
      completed,
      priority,
    })
  })
  it('should create a valid aggregate root', () => {
    expect(task.pullDomainEvents()).toEqual([])
  })

  it('should record domain events', () => {
    const taskCreatedDomainEvent = new TaskCreatedDomainEvent({
      aggregateId: task.id.value,
      attributes: {
        taskId: task.id.value,
      },
    })

    task.record(taskCreatedDomainEvent)
    expect(task.pullDomainEvents()).toEqual([taskCreatedDomainEvent])
  })
})
