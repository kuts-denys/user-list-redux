import { connect } from 'react-redux';
import { deleteUser } from '../../actions/index';
import Users from '../../components/Users/Users';

const getVisibleUsers = (users, searchString) => {
  if (searchString === '') return users;
  const str = searchString.toLowerCase();
  return users.filter(user => user.userName.toLowerCase().includes(str));
};

const mapStateToProps = state => ({
  visibleUsers: getVisibleUsers(state.users, state.searchString),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: (id) => {
    dispatch(deleteUser(id));
  },
});

const VisibleUsers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default VisibleUsers;
