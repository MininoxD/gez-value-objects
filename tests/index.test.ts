import * as Index from '../src/index'
describe('Index', () => {
  it('should export AggregateRoot', () => {
    expect(Index.AggregateRoot).toBeDefined()
  })

  it('should export AggregateRoot', () => {
    expect(Index.DomainEvent).toBeDefined()
  })

  it('should export EventBus', () => {
    expect(Index.EventBus).toBeDefined()
  })

  it('should export Uuid', () => {
    expect(Index.UuidValueObject).toBeDefined()
  })

  it('should export StringValueObject', () => {
    expect(Index.StringValueObject).toBeDefined()
  })

  it('should export NumberValueObject', () => {
    expect(Index.NumberValueObject).toBeDefined()
  })

  it('should export DateValueObject', () => {
    expect(Index.DateValueObject).toBeDefined()
  })

  it('should export BooleanValueObject', () => {
    expect(Index.BooleanValueObject).toBeDefined()
  })
})
