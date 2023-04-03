import { NoticesComp } from 'components/NoticesComp/NoticesComp';
import { Section, Container } from 'components/baseStyles/CommonStyle.styled';
import { SEO } from 'utils/SEO';

const Notices = () => {
  return (
    <>
      <SEO title="Find pets" description="You can find your favorite pets" />
      <Section>
        <Container>
          <NoticesComp />
        </Container>
      </Section>
    </>
  );
};

export default Notices;
