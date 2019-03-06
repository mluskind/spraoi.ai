import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Section = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space.xxl};

  ${p =>
    p.small &&
    css`
      margin-top: ${p => p.theme.space.lg};
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      !p.small &&
      css`
        margin-top: ${p => p.theme.space.xxxl};
      `};

    ${p =>
      !p.single &&
      css`
        display: flex;
      `};

    ${p =>
      !p.top &&
      css`
        align-items: center;
      `};

    ${p =>
      p.center &&
      css`
        text-align: center;
      `};
  }
`;

Section.propTypes = {
  center: PropTypes.bool,
  single: PropTypes.bool,
  small: PropTypes.bool,
  top: PropTypes.bool,
};

Section.defaultProps = {
  center: false,
  single: false,
  small: false,
  top: false,
};

const HeroSection = styled(Section)`
  margin-top: ${p => p.theme.space.lg};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin-top: 0;
  }
`;

const SectionH1 = styled.h1`
  position: relative;
  left: -0.1rem;
  color: ${p => p.theme.colors.primaryDark};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.4em;
  white-space: ${p => (p.wrap ? 'wrapLine' : 'nowrap')};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-bottom: ${p => p.theme.space.sm};
  }
`;

SectionH1.propTypes = {
  wrap: PropTypes.oneOf([0, 1]),
};

SectionH1.defaultProps = {
  wrap: 0,
};

const SectionH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.1em;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

const SectionH3 = styled.h3`
  margin: ${p => p.theme.space.xxxs} 0;

  ${p =>
    p.white &&
    css`
      color: ${p => p.theme.colors.white};
    `};
`;

SectionH3.propTypes = {
  white: PropTypes.oneOf([0, 1]),
};

SectionH3.defaultProps = {
  white: 1,
};

const SectionParagraph = styled.p`
  max-width: ${p => p.theme.maxWidths.paragraph};
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  line-height: ${p => p.theme.lineHeights.lg};

  ${p =>
    p.center &&
    css`
      margin-right: auto;
      margin-left: auto;
    `};
`;

SectionParagraph.propTypes = {
  center: PropTypes.bool,
};

SectionParagraph.defaultProps = {
  center: false,
};

const Order2 = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    order: 2;
  }
`;

const Figures = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space.xs};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 57%;
    margin-top: 0;

    ${p =>
      p.left &&
      css`
        flex-direction: row-reverse;
      `};
  }
`;

Figures.propTypes = {
  left: PropTypes.bool,
};

Figures.defaultProps = {
  left: false,
};

const Figure = styled.figure`
  margin: ${p => p.theme.space.md} ${p => p.theme.space.md} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: relative;
    margin: 0;
  }
`;

const IconFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9.8rem;
  height: 9.8rem;
  padding: ${p => p.theme.space.md};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};

  ${p =>
    p.small &&
    css`
      width: 7.4rem;
      height: 7.4rem;
      justify-content: center;
      align-items: center;
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p.smallOnMedium &&
      css`
        width: 7.4rem;
        height: 7.4rem;
        justify-content: center;
        align-items: center;
      `};
  }
`;

const ProcessFigure = styled.figure`
  margin-top: ${p => p.theme.space.lg};
  padding: ${p => p.theme.space.md};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 40%;
    margin: 0 0 0 ${p => p.theme.space.xl};
  }
`;

IconFigure.propTypes = {
  small: PropTypes.bool,
  smallOnMedium: PropTypes.bool,
};

IconFigure.defaultProps = {
  small: false,
  smallOnMedium: false,
};

const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  margin-bottom: ${p => p.theme.space.sm};
  fill: ${p => p.theme.colors.white};
`;

const StyledImage = styled.div`
  width: 9.8rem;
  height: 9.8rem;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.boxShadows.md};
  overflow: hidden;

  ${p =>
    p.clickable &&
    css`
      transition: transform ${p => p.theme.transitionSpeeds.normal};
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
      }
    `};
`;

StyledImage.propTypes = {
  clickable: PropTypes.bool,
};

StyledImage.defaultProps = {
  clickable: false,
};

const SectionUnorderedList = styled.ul`
  margin-top: ${p => p.theme.space.md};
  margin-left: ${p => p.theme.space.md};
  list-style: initial;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-left: ${p => p.theme.space.xl};
  }
`;

const SectionBackground = styled.div`
  position: absolute;
  z-index: -1;
`;

export {
  Figure,
  Figures,
  HeroSection,
  IconFigure,
  Order2,
  ProcessFigure,
  Section,
  SectionBackground,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  SectionUnorderedList,
  StyledIcon,
  StyledImage,
};
