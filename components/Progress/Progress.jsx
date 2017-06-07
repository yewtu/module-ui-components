import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({steps, currentStepIndex}) => {
  return (
    <div className="progress l-inline-parent l-vcenter-children">
      {
        steps.map((step, idx) => <button type="button"
                                         className={`l-inline-child l-inline-child-valign-center btn progress__step ${currentStepIndex === idx ? ' active' : ''}`}>
          <span className="progress__step-number">{idx + 1}</span>
          <span className="progress__step-label">{step}</span>
        </button>)
      }
    </div>)
};

Progress.propTypes = {
  steps: PropTypes.array,
  currentStepIndex: PropTypes.number
};

Progress.defaultProps = {
  steps: [],
  currentStepIndex: 0
};

export default Progress;
