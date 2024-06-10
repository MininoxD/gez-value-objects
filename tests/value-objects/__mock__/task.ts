import { AggregateRoot } from '../../../src/domain/aggregateRoot'
import { TaskCompleted } from './taskCompleted'
import { TaskDescription } from './taskDescription'
import { TaskDueDate } from './taskDueDate'
import { TaskId } from './taskId'
import { TaskName } from './taskName'
import { TaskPriority } from './taskPriority'

export class Task extends AggregateRoot {
  readonly id: TaskId
  readonly name: TaskName
  readonly description: TaskDescription
  readonly dueDate: TaskDueDate
  readonly completed: TaskCompleted
  readonly priority: TaskPriority

  constructor(params: {
    id: TaskId
    name: TaskName
    description: TaskDescription
    dueDate: TaskDueDate
    completed: TaskCompleted
    priority: TaskPriority
  }) {
    super()
    this.id = params.id
    this.name = params.name
    this.description = params.description
    this.dueDate = params.dueDate
    this.completed = params.completed
    this.priority = params.priority
  }
}
