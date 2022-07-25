import { accessTypes } from '../types';

const accessRequested = () => ({
  type: accessTypes.ACCESS_REQUESTED,
});

export default accessRequested;
