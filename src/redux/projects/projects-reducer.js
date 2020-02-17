import PROJECTS_DATA from './projects-data';

const INITIAL_STATE = PROJECTS_DATA;

const ProjectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ProjectsReducer;
