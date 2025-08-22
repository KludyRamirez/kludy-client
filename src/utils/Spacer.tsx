import React from 'react';

const Spacer: React.FC<{ size: 'xs' | 'small' | 'medium' | 'large' }> = ({
  size,
}) => <div className={`spacer-${size}`}></div>;

export default Spacer;
