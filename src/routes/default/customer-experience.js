import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import ContactCTA from '../../components/ContactCTA';
import Icon from '../../components/Icon';
import SEO from '../../components/SEO';
import Section from '../../components/Section';

const CustomerExperienceSolutionsPage = ({ location: { pathname } }) => (
  <>
    <SEO
      description="Microservices architected insurance customer experience portal solution."
      pathname={pathname}
      title="Customer Experience"
    />
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <Icon
        svg="kc-logo"
        sx={{ mb: 5, mx: [null, null, 'auto'] }}
        width={['13rem', null, '17rem']}
      />
      <Box as="h1" sx={{ fontSize: [5, null, null, 6] }}>
        Customer Experience Infrastructure
      </Box>
      <Box
        as="p"
        sx={{
          fontSize: 4,
          lineHeight: 1,
          maxWidth: 'maxWidths.paragraphWidest',
          mt: 5,
          mx: 'auto',
        }}
      >
        We have built a configurable, full lifecycle customer experience portal
        infrastructure, providing integration lift. We have leveraged this
        infrastructure to develop specific solutions
        across&nbsp;industry&nbsp;sectors.
      </Box>
    </Section>
    <Section sx={{ px: [0, null, 7] }}>
      <Box
        as="ul"
        sx={{
          display: 'grid',
          gridColumnGap: 5,
          gridRowGap: ['1px', null, 5],
          gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
        }}
      >
        {[
          {
            description: (
              <>
                Our group benefits and voluntary solution features case setup
                and service functionality, and comes pre-integrated with our
                machine learning capability to predict an individual’s
                propensity to purchase products for a particular plan design or
                individual product&nbsp;set.
              </>
            ),
            svg: 'group',
            title: <>Group &amp; Voluntary Benefits</>,
          },
          {
            description: (
              <>
                Our retail life and annuities solution, when coupled with our
                third party administration (TPA) partnership, provides a
                comprehensive offering and reduced time to market for carriers
                looking to enable a d2c&nbsp;strategy.
              </>
            ),
            svg: 'buoy',
            title: <>Life Insurance</>,
          },
          {
            description: (
              <>
                Our small commercial portal solution comes pre-integrated with a
                comprehensive administration suite to provide an easy purchase,
                self-service (e.g. endorsements) and first notice of claim
                (FNOL)&nbsp;experience.
              </>
            ),
            svg: 'factory',
            title: <>Small Commercial</>,
          },
        ].map((item, i) => (
          <Box
            key={item.svg}
            as="li"
            sx={{
              '&:last-of-type:nth-child(odd)': {
                transform: [
                  null,
                  null,
                  null,
                  'translateX(calc(50% + 0.625rem))',
                ],
              },
              bg: 'white',
              borderRadius: [null, null, 2],
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              p: [6, null, null, 7],
            }}
          >
            <Icon
              svg={item.svg}
              sx={{
                bg: `accentScale.${i}`,
                borderRadius: '50%',
                color: 'offWhite',
                height: '4rem',
                p: '1rem',
                width: '4rem',
              }}
            />
            <Box as="h3" sx={{ mt: 5 }}>
              {item.title}
            </Box>
            <Box
              as="p"
              sx={{ color: 'text.subtle', fontSize: 2, lineHeight: 2, mt: 4 }}
            >
              {item.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
    <Section sx={{ textAlign: [null, null, 'center'] }}>
      <h2>Technology</h2>
      <Box
        as="p"
        sx={{
          lineHeight: 2,
          maxWidth: 'maxWidths.paragraphWider',
          mt: 4,
          mx: 'auto',
        }}
      >
        Kwikcover provides the plug and play digital experience consumers have
        come to expect&mdash;with a microservices architecture that enables ease
        of integration. Further, it is pre-integrated with our{' '}
        <Box
          as={Link}
          sx={{ '&:hover': { textDecoration: 'underline' } }}
          to="/machine-learning/"
        >
          machine learning platform
        </Box>{' '}
        to ensure seamless integration&nbsp;of&nbsp;models.
      </Box>
    </Section>
    <ContactCTA />
  </>
);

CustomerExperienceSolutionsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerExperienceSolutionsPage;