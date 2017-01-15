import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    // checks if return value is type Array
    //   expect(commentRuducer()).to.be.instanceOf('Array');
    // checks if values are are identical (i.e. same in memory)
    //   expect(commentReeducer()).to.equal([]);
    // checks if array values are the same (i.e. values are equivalent) - aka 'deep comparison'
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
