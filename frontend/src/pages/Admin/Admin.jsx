import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { SEO } from 'utils/SEO';
import { UserComp } from 'components/UserComp/UserComp';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import { UserTitle } from 'components/UserComp/UserComp.styled';
import { Item, SLink, List } from 'components/Admin/AdminTable.styled';

const AdminPage = () => {
  return (
    <>
      <SEO title="Administration" description="Page Administration" />
      <UserComp />
      <Section
        paddingTop="0"
        paddingBottom="30px"
        paddingTopTablet="0"
        paddingBottomTablet="30px"
        paddingTopDesktop="0"
        paddingBottomDesktop="30px"
      >
        <Container alignItemsTablet="flex-start" alignItemsDesktop="flex-start">
          <UserTitle as="h2">Administration of:</UserTitle>
          <List>
            <Item>
              <SLink to="users">
                Users
                <FaUserAlt size={15} />
              </SLink>
            </Item>
            <Item>
              <SLink to="notices">
                Notices
                <MdPets size={16} />
              </SLink>
            </Item>
          </List>
        </Container>
      </Section>
    </>
  );
};

export default AdminPage;
