import { configureStore } from '@reduxjs/toolkit';
import { cryproApi } from '../services/CryptoApi';

export default configureStore({
  reducer: {
    [cryproApi.reducerPath]: cryproApi.reducer,
  },
});
