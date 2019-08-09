// NOTE: this file is generated automatically, any changes will be overwritten.

import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@spraoi/base';
import barrellogo from '../../images/icons/barrel-logo.svg';
import bgcxsolutions from '../../images/icons/bg-cx-solutions.svg';
import bglanding from '../../images/icons/bg-landing.svg';
import bgmlsolutions from '../../images/icons/bg-ml-solutions.svg';
import bgpeople from '../../images/icons/bg-people.svg';
import bgservices from '../../images/icons/bg-services.svg';
import bridge from '../../images/icons/bridge.svg';
import buildoperate from '../../images/icons/build-operate.svg';
import buy from '../../images/icons/buy.svg';
import chatbot from '../../images/icons/chatbot.svg';
import cobrowsing from '../../images/icons/co-browsing.svg';
import cxsolutions from '../../images/icons/cx-solutions.svg';
import data from '../../images/icons/data.svg';
import delivery from '../../images/icons/delivery.svg';
import disability from '../../images/icons/disability.svg';
import facebook from '../../images/icons/facebook.svg';
import factory from '../../images/icons/factory.svg';
import fraud from '../../images/icons/fraud.svg';
import group from '../../images/icons/group.svg';
import hand from '../../images/icons/hand.svg';
import iml from '../../images/icons/iml.svg';
import india from '../../images/icons/india.svg';
import innovation from '../../images/icons/innovation.svg';
import instagram from '../../images/icons/instagram.svg';
import integration from '../../images/icons/integration.svg';
import lifebuoy from '../../images/icons/lifebuoy.svg';
import linkedin from '../../images/icons/linkedin.svg';
import map from '../../images/icons/map.svg';
import mlprocess from '../../images/icons/ml-process.svg';
import multiplatform from '../../images/icons/multiplatform.svg';
import observable from '../../images/icons/observable.svg';
import offshore from '../../images/icons/offshore.svg';
import placeholder from '../../images/icons/placeholder.svg';
import rightarrow from '../../images/icons/right-arrow.svg';
import ruler from '../../images/icons/ruler.svg';
import scalable from '../../images/icons/scalable.svg';
import scales from '../../images/icons/scales.svg';
import serviceprocess from '../../images/icons/service-process.svg';
import services from '../../images/icons/services.svg';
import spraoilogo from '../../images/icons/spraoi-logo.svg';
import standardized from '../../images/icons/standardized.svg';
import thirdparty from '../../images/icons/third-party.svg';
import traceable from '../../images/icons/traceable.svg';
import transparent from '../../images/icons/transparent.svg';
import twitter from '../../images/icons/twitter.svg';
import usa from '../../images/icons/usa.svg';

const svgMap = {
  'barrel-logo': barrellogo,
  'bg-cx-solutions': bgcxsolutions,
  'bg-landing': bglanding,
  'bg-ml-solutions': bgmlsolutions,
  'bg-people': bgpeople,
  'bg-services': bgservices,
  bridge: bridge,
  'build-operate': buildoperate,
  buy: buy,
  chatbot: chatbot,
  'co-browsing': cobrowsing,
  'cx-solutions': cxsolutions,
  data: data,
  delivery: delivery,
  disability: disability,
  facebook: facebook,
  factory: factory,
  fraud: fraud,
  group: group,
  hand: hand,
  iml: iml,
  india: india,
  innovation: innovation,
  instagram: instagram,
  integration: integration,
  lifebuoy: lifebuoy,
  linkedin: linkedin,
  map: map,
  'ml-process': mlprocess,
  multiplatform: multiplatform,
  observable: observable,
  offshore: offshore,
  placeholder: placeholder,
  'right-arrow': rightarrow,
  ruler: ruler,
  scalable: scalable,
  scales: scales,
  'service-process': serviceprocess,
  services: services,
  'spraoi-logo': spraoilogo,
  standardized: standardized,
  'third-party': thirdparty,
  traceable: traceable,
  transparent: transparent,
  twitter: twitter,
  usa: usa,
};

const Icon = ({ svg, ...rest }) => {
  const SvgComponent = svgMap[svg];

  return (
    <Box {...rest}>
      <SvgComponent />
    </Box>
  );
};

Icon.propTypes = {
  svg: PropTypes.oneOf([
    'barrel-logo',
    'bg-cx-solutions',
    'bg-landing',
    'bg-ml-solutions',
    'bg-people',
    'bg-services',
    'bridge',
    'build-operate',
    'buy',
    'chatbot',
    'co-browsing',
    'cx-solutions',
    'data',
    'delivery',
    'disability',
    'facebook',
    'factory',
    'fraud',
    'group',
    'hand',
    'iml',
    'india',
    'innovation',
    'instagram',
    'integration',
    'lifebuoy',
    'linkedin',
    'map',
    'ml-process',
    'multiplatform',
    'observable',
    'offshore',
    'placeholder',
    'right-arrow',
    'ruler',
    'scalable',
    'scales',
    'service-process',
    'services',
    'spraoi-logo',
    'standardized',
    'third-party',
    'traceable',
    'transparent',
    'twitter',
    'usa',
  ]).isRequired,
};

export default Icon;