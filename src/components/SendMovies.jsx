import React from 'react';
import Modal from 'react-modal';
import styles from './SendMovies.module.css';

const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content: {
    overflow: 'hidden',
    paddingLeft: 0,
    paddingRight: 0,
  },
};

class SendMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myEmail: '',
      listEmails: '',
      myMessage: '',
      allNewFriends: [''],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Ton message a bien été envoyé à tes amis ! Bonne soirée film ;)');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddFriend = (click) => {
    click.preventDefault();
    const { allNewFriends } = this.state;
    this.setState({
      allNewFriends: [...allNewFriends, ''],
    });
  };

  render() {
    const { myEmail, listEmails, myMessage, allNewFriends } = this.state;
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
            <form onSubmit={this.handleSubmit}>
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
                <label htmlFor="listEmails" id="myfriends">
                  Mes invités* :
                  {allNewFriends.map((newFriend) => (
                    <input
                      key={newFriend.index}
                      type="email"
                      id="listEmails"
                      name="listEmails"
                      placeholder="email@email.fr"
                      value={listEmails}
                      onChange={this.handleChange}
                    />
                  ))}
                  <button type="button" onClick={this.handleAddFriend}>
                    J’ajoute un ami
                  </button>
                </label>
              </div>

              <button className={styles.btnSend} type="submit">
                J’envoie&nbsp;!
              </button>
            </form>
            <p className={styles.requiredFields}>*Champs obligatoires</p>
          </div>
        </article>
      </Modal>
    );
  }
}

export default SendMovies;
