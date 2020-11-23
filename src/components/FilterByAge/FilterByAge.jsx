import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesFilterByAge from './FilterByAge.module.css';
import AgeOfTheYoungest from './AgeOfTheYoungest';

class FilterByAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ageValue: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      ageValue: event,
    });
  }

  render() {
    const { ageValue } = this.state;
    const { match } = this.props;
    return (
      <article className={stylesFilterByAge.FilterByAge}>
        <div className={stylesFilterByAge.bigButton}>En Famille</div>
        <div className={stylesFilterByAge.bigButton}>
          <p>Sélectionner l&apos;age du plus jeune</p>
          <AgeOfTheYoungest handleChange={this.handleChange} value={ageValue} />

          <Link to={`${match.url}/age-${ageValue}/`} title="">
            Suivant
          </Link>
          <p> </p>
        </div>
      </article>
    );
  }
}

FilterByAge.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      who: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(FilterByAge);
