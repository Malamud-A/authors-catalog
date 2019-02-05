import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setupAuthors,
  setPage,
  setSearchQuery,
  sortAuthors,
} from '../Redux/Authors/actions';
import Authors from '../Components/Authors/Index';

const mapStateToProps = ({ authors }) => ({
  authors: authors.data.chunked,
  currentPage: authors.currentPage,
  appliedSearch: authors.search,
  sortBy: authors.sortBy,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setupAuthors,
  setPage,
  setSearchQuery,
  sortAuthors,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Authors);
