import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Box from '@spraoi/base/Box';

const Icon = ({ color, left, icon, id, title, small }) => {
  const rest = {
    borderRadius: 2,
    color,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 2,
    fontWeight: 'semibold',
    height: small ? '6rem' : '8rem',
    justifyContent: 'space-between',
    letterSpacing: 2,
    lineHeight: 1,
    m: 3,
    p: 3,
    textAlign: left ? 'left' : 'center',
    textTransform: 'uppercase',
  };

  const iconRest = {
    fill: color,
  };

  if (small) {
    rest.width = '8rem';
    iconRest.width = '6rem';
  }

  const result =
    id !== '' ? (
      <Link to={id}>
        <Box as="figure" {...rest}>
          <Box as={icon} {...iconRest} />
          <Box as="p">{title}</Box>
        </Box>
      </Link>
    ) : (
      <Box as="figure" {...rest}>
        <Box as={icon} {...iconRest} />
        <Box as="p">{title}</Box>
      </Box>
    );

  return result;
};

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.func.isRequired,
  id: PropTypes.string,
  left: PropTypes.bool,
  link: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.string,
};

Icon.defaultProps = {
  color: 'primary',
  id: '',
  left: false,
  link: false,
  small: false,
  title: '',
};

export default Icon;
