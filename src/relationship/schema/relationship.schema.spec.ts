import { RelationshipSchema } from './relationship.schema';

describe('RelationshipSchema', () => {
  it('should be defined', () => {
    expect(new RelationshipSchema()).toBeDefined();
  });
});
