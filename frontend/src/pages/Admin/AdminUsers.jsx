import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdClose, MdEdit } from 'react-icons/md';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
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
import { EditDataModal } from 'components/Admin/EditDataModal/EditDataModal';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  }, []);

  async function deleteUser(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/admin/users/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function editUser(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/admin/users/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const toggleModal = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addModal({
        modal: e.currentTarget.dataset.modal,
      }),
    );
    openModalWindow(e, null);
    setIsOpenModal(true);
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
                          toggleModal(e);
                        }}
                        data-modal="users"
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
                      {isOpenModal && (
                        <EditDataModal
                          onClose={editUser(user._id)}
                          path="user"
                          id={user._id}
                        />
                      )}
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

export default AdminUsersPage;
