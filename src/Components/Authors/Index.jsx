import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Author from './Author'
import Chevron from '../common/Chevron/Chevron'
import searchIco from '../../img/search.png';

class Index extends Component {
  state = {
    search: '',
    sortBy: 'pageviews',
  };

  componentDidMount() {
    this.props.setupAuthors();
    this.props.setSearchQuery(this.state.search);
  }

  componentDidUpdate() {
    if (this.state.sortBy !== this.props.sortBy) {
      this.props.sortAuthors (this.state.sortBy);
    }
  }


  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };



  setSearch = (e) => {
    e.preventDefault();
    this.props.setSearchQuery(this.state.search);
    this.setState({
      sortBy: 'pageviews',
    });
  };

  changePage = (e) => {
    this.props.setPage(e.currentTarget.dataset.targetPage);
  };

  render() {

    const {authors, currentPage, appliedSearch} = this.props;
    const {search, sortBy} = this.state;

    const shownElements = {
      start: '',
      end: '',
    };

    if (authors.length) {
      shownElements.start = (currentPage + 1) * 10 - 9;
      shownElements.end = (currentPage + 1) * 10 - 10 + authors[currentPage].length
    }

    return (
      <div className="container">
        <div className="sort">
          <label htmlFor="sortBy" className="sort__label">Сортировать по: </label>
          <select onChange={this.handleInputChange} value={sortBy} name="sortBy" className="sort__select">
            <option value="name">Имени</option>
            <option value="pageviews">Просмотрам</option>
          </select>
        </div>
        <div className="authors">
          <form onSubmit={this.setSearch} className="authors__search">
            <button type="submit" className="authors__search--btn">
              <img src={searchIco} alt="" />
            </button>
            <input
              value={search}
              onChange={this.handleInputChange}
              type="text"
              className="authors__search--input"
              name="search"
              placeholder={appliedSearch || "Поиск авторов по имени"}
            />
          </form>
          <div className="authors__list">
            {!!authors.length
            &&
            authors[currentPage]
              .map( author => <Author key={`author-${author.id}`} author={author}/> )
            }
          </div>
        </div>
        <div className="pagination">
          {currentPage !== 0 &&
          <button
            data-target-page={currentPage - 1}
            type="button"
            className="pagination__prev-btn"
            onClick={this.changePage}
          >
            <Chevron/>
          </button>}
          <p className="pagination__shown-elements">{`${shownElements.start} - ${shownElements.end}`}</p>
          {currentPage !== authors.length - 1 &&
          <button
            data-target-page={currentPage + 1}
            type="button"
            className="pagination__next-btn"
            onClick={this.changePage}
          >
            <Chevron/>
          </button>}
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  authors: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  appliedSearch: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,

  setupAuthors: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  sortAuthors: PropTypes.func.isRequired,
};

export default Index;
