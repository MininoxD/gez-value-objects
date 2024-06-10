# @gez/value-objects

## Description

This package provides a robust and extensible collection of value objects designed to facilitate the modeling of complex domains following the principles of Domain-Driven Design (DDD), Hexagonal Architecture, and Clean Architecture. With a focus on immutability and state validation, these value objects are essential tools for building resilient and maintainable enterprise applications.

## Features

- **Object Types:** Includes implementations for common types such as `BooleanValueObject`, `DateValueObject`, `NumberValueObject`, and `StringValueObject`, facilitating the representation of domain concepts more explicitly.

- **Extensibility:** Designed to be easily extended to support more complex and domain-specific types.

- **Integrated Validation:** Each value object includes validation mechanisms to ensure the integrity of the domain state.

- **Support for Domain Events:** Facilitates the implementation of reactive systems through the use of domain events, allowing decoupled communication between different parts of the system.

## Usage Example

Consider the use case of modeling a Task within a project management system. A `Task` may have several properties such as `id`, `name`, `description`, `due date`, `completed`, and `priority`. Each of these properties can be modeled using value objects to ensure that the domain invariants are correctly maintained.

```typescript
import { AggregateRoot } from './aggregateRoot'
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
```

This example demonstrates how value objects can be used to build rich and expressive entities in a complex domain, while ensuring that the entity's state is always valid.

## Installation

```bash
npm install @gez/value-objects
```

## Contribution

This project is open source and contributions are welcome. If you would like to contribute, please review the contribution guidelines in the repository.

## License

This project is licensed under the GPL-3.0 License. See the LICENSE file for more details.

---

Built with ❤ by Minino.
