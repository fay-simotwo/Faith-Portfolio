import projectReducer from './ProjectsSlice';

const store = configureStore(
  {
    reducer: {
      projects: projectReducer,
    },
  },
);

export default store;
