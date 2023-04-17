import { SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import NavLayout from '../layouts/NavLayout';
import ProfileBioData from '../components/ProfileBiodata';
import ProfileGigs from '../components/ProfileGigs';
import ProfileReviews from '../components/ProfileReviews';
import AuthLayout from '../layouts/AuthLayout';

const Profile = () => {

  return (
    <AuthLayout>
    <NavLayout>
      <Grid templateColumns="repeat(21, 1fr)" gap={10} mb={10}>
        <GridItem colSpan={6}>
          <SimpleGrid columns={1} spacing={10}>
            <ProfileBioData />
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={15}>
          <SimpleGrid columns={1} spacing={10}>
            <ProfileGigs />
            <ProfileReviews />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </NavLayout>
    </AuthLayout>
  );
};

export default Profile;
