import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdClose, MdEdit } from 'react-icons/md';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { SEO } from 'utils/SEO';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';
import { BackButton } from 'components/helpers/BackLink/BackLink';
import {
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableData,
} from '../components/Table/ListTable.styled';

const AdminNoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/admin';

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin/notices');
        setNotices(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const date = date => (date ? new Date(date).toISOString().slice(0, 10) : '');
  return (
    <>
      <SEO title="Notices list" description="Notice administration page" />
      <Section>
        <Container
          alignItems="flex-start"
          alignItemsTablet="flex-start"
          alignItemsDesktop="flex-start"
        >
          <BackButton to={backLinkHref}>Go back</BackButton>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          <Table>
            <thead>
              <TableRow>
                {/* <TableHead>ID</TableHead> */}
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Birthday</TableHead>
                <TableHead>Breed</TableHead>
                <TableHead>Sex</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Height</TableHead>
                <TableHead>Width</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Passport</TableHead>
                <TableHead>Sterilization</TableHead>
                <TableHead>Lives</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Images</TableHead>
                <TableHead>Created at</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {notices.length > 0 &&
                !error &&
                notices.map(notice => (
                  <TableRow key={notice._id}>
                    {/* <TableData>{notice._id}</TableData> */}
                    <TableData>{notice.category}</TableData>
                    <TableData>{notice.typeofpet}</TableData>
                    <TableData>{notice.title}</TableData>
                    <TableData>{notice.name}</TableData>
                    <TableData>{date(notice.birthday)}</TableData>
                    <TableData>{notice.breed}</TableData>
                    <TableData>{notice.sex}</TableData>
                    <TableData>{notice.size}</TableData>
                    <TableData>{notice.height}</TableData>
                    <TableData>{notice.weight}</TableData>
                    <TableData>{notice.location}</TableData>
                    <TableData>{notice.price}</TableData>
                    <TableData>{notice.currency}</TableData>
                    <TableData>{notice.passport}</TableData>
                    <TableData>{notice.sterilization}</TableData>
                    <TableData>{notice.lives}</TableData>
                    <TableData>{notice.comments}</TableData>
                    <TableData>
                      {notice.imageUrl_2
                        ? '3'
                        : notice.imageUrl_1
                        ? '2'
                        : notice.imageUrl
                        ? '1'
                        : '0'}
                    </TableData>
                    <TableData>{date(notice.createdAt)}</TableData>
                    <TableData>
                      <IconButton aria-label="Edit notice">
                        <MdEdit size={15} />
                      </IconButton>
                      <IconButton aria-label="Delete notice">
                        <MdClose size={15} />
                      </IconButton>
                    </TableData>
                  </TableRow>
                ))}
            </tbody>
          </Table>
        </Container>
      </Section>
    </>
  );
};

export default AdminNoticesPage;
