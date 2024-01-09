import { GETDATA } from "./actiontype";

const intialVal = {
  dataValue: [],
};
 const reducer = (state = intialVal, { type, payload }) => {
  switch (type) {
    case GETDATA:
      return { ...state, dataValue: payload };
    default:
      return state;
  }
};
export default reducer;
