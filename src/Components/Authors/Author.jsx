import React from 'react';
import PropTypes from 'prop-types';
import numberFormatter from '../../utils/numberFormatter';
import medals from '../../utils/medals';

const Author = ({ author }) => (
  <div className="authors__list--item author">
    <p className="author__place">{author.id}</p>
    <div className="author__avatar">{author.name.split('')[0]}</div>
    <div className="author__title">
      <p className="author__title--name">{author.name}</p>
      <p className="author__title--publications">{`${author.count_pub} публ.`}</p>
    </div>
    <div className="author__medal">
      {author.medal
      && <img className="author__medal--img" src={medals[author.medal]} alt="" />
      }
    </div>
    <div className="author__views">
      <p className="author__views--count">{numberFormatter(author.pageviews)}</p>
    </div>
  </div>
);

Author.propTypes = {
  author: PropTypes.object.isRequired,
};

export default Author;
