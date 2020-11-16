import React from 'react';
import Modal from 'react-modal';
import styles from './SendMovies.module.css';

class SendMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myEmail: '',
      listEmails: '',
      myMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Votre sélection de film(s) a été envoyée !');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { myEmail, listEmails, myMessage } = this.state;
    return (
      <Modal style={styles.modal}>
        <article className={styles.SendMovies}>
          <h2>J’envoie mon choix</h2>
          <div className={styles.areaOfSendForm}>
            <label htmlFor="myMessage">
              Mon message* :
              <textarea
                type="text"
                id="myMessage"
                name="myMessage"
                placeholder="Viens voter pour le film de ce soir !"
                value={myMessage}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="listEmails">
              Destinataire(s)* :
              <input
                type="email"
                id="listEmails"
                name="listEmails"
                placeholder="email@email.fr"
                value={listEmails}
                onChange={this.handleChange}
              />
              <button type="button" onSubmit={this.handleSubmit}>
                Ajouter un ami
              </button>
            </label>

            <label htmlFor="myEmail">
              Mon email* :
              <input
                type="email"
                id="myEmail"
                name="myEmail"
                placeholder="email@email.fr"
                value={myEmail}
                onChange={this.handleChange}
              />
            </label>

            <p>*Champs obligatoires</p>
          </div>
        </article>
      </Modal>
    );
  }
}

export default SendMovies;
