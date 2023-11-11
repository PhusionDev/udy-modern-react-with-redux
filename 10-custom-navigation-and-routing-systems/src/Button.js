import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  return <button className='bg-blue-100'>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        `You can only use one of the props primary, secondary, success, warning, danger.`
      );
    }
  },
};

export default Button;
