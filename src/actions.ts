export interface Action<T> {
    type: string,
    payload: T
}

export const types = {
  CLOCK_TICK : "CLOCK_TICK",
  // more here...  
}

export const createClockTick = (tick: Date): Action<Date> => (
  { 
    type: types.CLOCK_TICK,
    payload: tick 
  }
);

