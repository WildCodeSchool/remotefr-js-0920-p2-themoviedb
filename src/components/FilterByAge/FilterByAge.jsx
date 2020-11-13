import React from 'react';
import { Link } from 'react-router-dom';
import stylesFilterByAge from './FilterByAge.module.css';
import AgeOfTheYoungest from './AgeOfTheYoungest';

class FilterByAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ageValue: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        ageValue: event.target.value,
      },
      this.calculruntime,
    );
  }

  render() {
    const { ageValue } = this.state;
    return (
      <article className={stylesFilterByAge.FilterByAge}>
        <div className={stylesFilterByAge.bigButton}>
          <Link to="/famille" title="">
            En Famille
          </Link>
        </div>
        <div className={stylesFilterByAge.bigButton}>
          <p>Sélectionner l&apos;age du plus jeune</p>
          <AgeOfTheYoungest handleChange={this.handleChange} value={ageValue} />
          <button type="submit">Suivant</button>
          <p> </p>
        </div>
      </article>
    );
  }
}

export default FilterByAge;
