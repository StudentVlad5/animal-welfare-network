import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import { UserComp } from 'components/UserComp/UserComp';
import { SEO } from 'utils/SEO';

const UserPage = () => {
  return (
    <>
      <SEO title="Profile" description="User profile" />
      <Section
        paddingTop="60px"
        paddingBottom="80px"
        paddingBottomDesktop="40px"
      >
        <Container
          flexDirectionDesktop="row"
          justifyContentDesktop="space-between"
          alignItemsDesktop="flex-start"
        >
          <UserComp />
        </Container>
      </Section>
    </>
  );
};

export default UserPage;
