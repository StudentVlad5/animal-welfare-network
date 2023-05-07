import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdEdit } from 'react-icons/md';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { fetchData, deleteData } from 'services/APIservice';
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
  LearnMoreBtn,
} from 'components/Admin/AdminTable.styled';
import { EditUserDataModal } from 'components/Admin/EditDataModal/EditUserDataModal';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin/users');
        setUsers(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload]);

  async function deleteUser(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/admin/users/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
      dispatch(addReload(true));
      setIsLoading(false);
    }
  }

  // add link to back
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/admin';

  // watch for view and toggle columns
  const viewWidth = window.screen.width;
  const [isLearnMore, setIsLearnMore] = useState(viewWidth >= 1280);
  const toggleLearnMore = () => setIsLearnMore(state => !state);

  // add edit modal
  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'admin') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      openModalWindow(e, null);
    }
  };

  const date = date => (date ? new Date(date).toISOString().slice(0, 10) : '');

  return (
    <>
      <SEO title="Users list" description="User administration page" />
      <Section>
        <Container
          alignItems="flex-start"
          alignItemsTablet="flex-start"
          alignItemsDesktop="flex-start"
        >
          <BackButton to={backLinkHref}>Go back</BackButton>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {isLearnMore ? (
            <LearnMoreBtn onClick={toggleLearnMore}>Less</LearnMoreBtn>
          ) : (
            <LearnMoreBtn onClick={toggleLearnMore}>More</LearnMoreBtn>
          )}
          <Table>
            <thead>
              <TableRow>
                {/* <TableHead>ID</TableHead> */}
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                {isLearnMore && (
                  <>
                    <TableHead>Phone</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Birthday</TableHead>
                    <TableHead>Create</TableHead>
                    <TableHead>Avatar</TableHead>
                  </>
                )}
                <TableHead>Role</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </thead>
            <tbody>
              {users.length > 0 &&
                !error &&
                users.map(user => (
                  <TableRow key={user._id}>
                    {/* <TableData>{user._id}</TableData> */}
                    <TableData>{user.userName}</TableData>
                    <TableData>{user.email}</TableData>
                    {isLearnMore && (
                      <>
                        <TableData>{user.phone}</TableData>
                        <TableData>{user.location}</TableData>
                        <TableData>{date(user.birthday)}</TableData>
                        <TableData>{date(user.createdAt)}</TableData>
                        <TableData>{user.avatar ? 'yes' : 'no'}</TableData>
                      </>
                    )}
                    <TableData>{user.role}</TableData>
                    <TableData>
                      <IconButton
                        aria-label="Edit user"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={user._id}
                      >
                        <MdEdit size={15} />
                      </IconButton>
                      <IconButton
                        aria-label="Delete user"
                        onClick={e => {
                          deleteUser(user._id);
                        }}
                      >
                        <MdClose size={15} />
                      </IconButton>
                    </TableData>
                  </TableRow>
                ))}
            </tbody>
          </Table>
        </Container>
      </Section>
      <EditUserDataModal path="admin/users" />
    </>
  );
};

export default AdminUsersPage;
