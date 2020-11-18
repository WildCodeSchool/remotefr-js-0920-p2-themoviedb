import React from 'react';
import Modal from 'react-modal';
import styles from './SendMovies.module.css';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
};

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
      <Modal
        className={styles.SendMoviesModal}
        isOpen
        ariaHideApp={false}
        style={customStyles}
      >
        <article className={styles.SendMovies}>
          <h2>J’ai choisi, je partage !</h2>
          <div className={styles.areaOfSendForm}>
            <form>
              <div className={styles.divEmail}>
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
              </div>
              <div className={styles.divMessage}>
                <label htmlFor="myMessage">
                  Mon message* :
                  <textarea
                    type="text"
                    id="myMessage"
                    name="myMessage"
                    placeholder="Viens voter pour notre prochaine soirée film !"
                    value={myMessage}
                    onChange={this.handleChange}
                  />
                </label>
                <p className={styles.requiredFields}>
                  (n’oublie pas de signer ton message !)
                </p>
              </div>

              <div className={styles.divEmails}>
                <label htmlFor="listEmails">
                  Mes invités* :
                  <input
                    type="email"
                    id="listEmails"
                    name="listEmails"
                    placeholder="email@email.fr"
                    value={listEmails}
                    onChange={this.handleChange}
                  />
                  <button type="button" onSubmit={this.handleSubmit}>
                    J’ajoute un ami
                  </button>
                </label>
                <p className={styles.requiredFields}>*Champs obligatoires</p>
              </div>

              <button
                className={styles.btnSend}
                type="button"
                onSubmit={this.handleSubmit}
              >
                J’envoie&nbsp;!
              </button>
            </form>
          </div>
        </article>
      </Modal>
    );
  }
}

export default SendMovies;
