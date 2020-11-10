import React from 'react';
import styles from './Contact.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  }

  handleSubmit = () => {};

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, email, message } = this.state;
    return (
      <article className={styles.Contact}>
        <h2>Nous contacter</h2>
        <div className={styles.areaOfText}>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="myFirstName">
                Comment t’appelles-tu&nbsp;?
                <input
                  type="text"
                  id="myFirstName"
                  name="firstName"
                  placeholder="Ton prénom"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="myLastName">
                Et ton nom&nbsp;?
                <input
                  type="text"
                  id="myLastName"
                  name="lastName"
                  placeholder="Ton nom"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="myEmail">
                Sur quel e-mail peut-on te répondre&nbsp;?
                <input
                  type="email"
                  id="myEmail"
                  name="email"
                  placeholder="Ton e-mail"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="myMessage">
                Que veux-tu nous dire&nbsp;?
                <textarea
                  id="myMessage"
                  name="message"
                  placeholder="Ton message"
                  value={message}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <button type="submit" title="Envoyer le message">
              Envoyer
            </button>
          </form>
        </div>
      </article>
    );
  }
}

export default Contact;
