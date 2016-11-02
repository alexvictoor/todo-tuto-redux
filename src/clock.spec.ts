import { expect } from "chai";
import * as actions from "./actions";
import clock from "./clock"

describe('Clock reducer', () => {

  it('should update on tick notification', () => {
    // when
    const state = clock(new Date(1970, 1), 
      actions.createClockTick(
        new Date(2000, 1)
      )
    );
    // then
    expect(state).to.deep.equal(new Date(2000, 1));
       
  });
});
