import React from 'react';
import './loading.styles.scss';
export const Loading = ({ loading }) => {
  return (
    <div className={`loading ${loading ? 'displayed' : null}`}>
      <div className="bar"></div>
    </div>
  );
};
