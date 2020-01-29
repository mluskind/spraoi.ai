import PropTypes from 'prop-types';
import React from 'react';
import Box from '@spraoi/base/Box';
import SEO from '../../components/SEO';
import Barrel from '../../images/icons/barrel-logo.svg';
import {
  Section,
  SectionH1,
  SectionH2,
  SectionParagraph,
  CardList,
  Icon,
  Card,
  Accordion,
  IconCardList,
} from '../../boxComponents';

import Standardized from '../../images/icons/standardized.svg';
import Repeatable from '../../images/icons/repeatable.svg';
import Observable from '../../images/icons/observable.svg';
import Measurable from '../../images/icons/measurable.svg';
import Experimentation from '../../images/icons/experimentation.svg';
import Scalable from '../../images/icons/scalable.svg';
import Segmentation from '../../images/icons/segmentation_assignment.svg';
import AA from '../../images/icons/auto_adjudication.svg';
import Fraud from '../../images/icons/fraud.svg';

import MLData from '../../data/dataPages/ML';

const MLAdditionalModels = () => {
  return <Accordion data={MLData.additionalModels} />;
};

const MLClaimsSuite = () => {
  const data = [
    {
      description:
        'Go beyond rules-based assignment to organization of at FNOL for the examiner that has the best experience adjudicating claims of this complexity.',
      icon: Segmentation,
      title: 'SEGMENTATION AND ASSIGNMENT',
    },
    {
      description:
        'Adjudicate claims minimizing human intervention through recognition of those with predictable outcomes for resolution without adjuster participation.',
      icon: AA,
      title: 'Auto adjudication',
    },
    {
      description:
        'Identify fraudulent claims faster and/or those previously unidentified.',
      icon: Fraud,
      title: 'Fraud identification',
    },
  ];
  return <IconCardList data={data} />;
};

const MachineLearningPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Patent-pending continuous delivery platform enabling insurance specific machine learning models."
      pathname={pathname}
      title="Machine Learning"
    />
    <Section single>
      <SectionH1 dataWrap>MACHINE LEARNING PLATFORM</SectionH1>
      <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
        <Box order={{ _: 2, md: 1 }}>
          <SectionParagraph>
            For the insurance industry, our BARREL platform is in a category of
            one. This patent-pending infrastructure affords Insurance specific,
            reusable rules, schemas and processes to speed the machine learning
            model development process and virtually eliminate DevOps and Data
            Engineers from it. By applying the lessons learned from 30 years of
            delivering machine learning solutions to the market, we built a
            platform to address what impedes insurers in this space:
          </SectionParagraph>
        </Box>
        <Box ml="auto" order={{ _: 1, md: 2 }}>
          <Box as={Barrel} width="fitContent" />
        </Box>
      </Box>
      <Card>
        <CardList>
          <Icon icon={Standardized} small title="Standardized" />
          <Icon icon={Repeatable} small title="Repeatable" />
          <Icon icon={Observable} small title="Observable" />
          <Icon icon={Measurable} small title="Measurable" />
          <Icon icon={Experimentation} small title="Experimentation" />
          <Icon icon={Scalable} small title="Scalable" />
        </CardList>
      </Card>
    </Section>

    <Section>
      <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
        <Box maxWidth={{ _: '100%', md: '20%' }}>
          <SectionH2>What makes Barrel different ?</SectionH2>
        </Box>
        <Box maxWidth={{ _: '100%', md: '80%' }} ml={{ md: '2rem' }}>
          <Accordion data={MLData.diff} />
        </Box>
      </Box>
    </Section>

    <Section center single>
      <SectionH2>Claims Suite</SectionH2>
      <SectionParagraph center>
        Our claims suite models can be fit to your data. While these function
        across lines of business, we also have developed specific models for
        production lines (e.g. settlement, bridging and offset models for
        disability products).
      </SectionParagraph>

      <MLClaimsSuite />
    </Section>

    <Section>
      <Box display="flex" flexDirection={{ _: 'column', md: 'row' }}>
        <Box maxWidth={{ _: '100%', md: '50%' }} order={{ _: 2, md: 1 }}>
          <MLAdditionalModels />
        </Box>
        <Box
          maxWidth={{ _: '100%', md: '50%' }}
          ml={{ md: '2rem' }}
          order={{ _: 1, md: 2 }}
        >
          <SectionH2>Additional Models</SectionH2>
          <SectionParagraph>
            We continue to extend models available within the Barrel framework.
            Below are others we have developed with clients.
          </SectionParagraph>
        </Box>
      </Box>
    </Section>
  </>
);

MachineLearningPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default MachineLearningPage;
