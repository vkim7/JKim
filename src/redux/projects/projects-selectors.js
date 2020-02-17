import { createSelector } from 'reselect';

const selectProjects = state => state.projects;

export const selectProjectsSections = createSelector(
  [selectProjects],
  project => project.sections
);
