import React from 'react';
import { connect } from 'react-redux';
import { selectProjectsSections } from '../../redux/projects/projects-selectors';
import { createStructuredSelector } from 'reselect';

import Project from '../../components/project/project.component';

import './projects.style.scss';

const ProjectsPage = ({ sections }) => (
  <div className='projects'>
    {sections.map(({ id, ...otherProps }) => (
      <Project key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectProjectsSections
});

export default connect(mapStateToProps)(ProjectsPage);
