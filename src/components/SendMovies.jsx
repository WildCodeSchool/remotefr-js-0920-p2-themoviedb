import React from 'react';
import styles from './SendMovies.module.css';

class SendMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myEmail: '',
      myMessage: '',
      allNewFriends: [''],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // alert('Ton message a bien été envoyé à tes amis ! Bonne soirée film ;)');
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeEmailFriends = (event, index) => {
    const { value } = event.target;
    const { allNewFriends } = this.state;
    const copyAllNewFriends = [...allNewFriends];
    copyAllNewFriends.splice(index, 1, value);
    this.setState({
      allNewFriends: copyAllNewFriends,
    });
  };

  handleAddFriend = (click) => {
    click.preventDefault();
    const { allNewFriends } = this.state;
    this.setState({
      allNewFriends: [...allNewFriends, ''],
    });
  };

  handleAddFriendByKeyboard = (event) => {
    event.preventDefault();
    if (event.keyCode === 13 || event.keyCode === 32) {
      const { allNewFriends } = this.state;
      this.setState({
        allNewFriends: [...allNewFriends, ''],
      });
    }
  };

  render() {
    const { myEmail, myMessage, allNewFriends } = this.state;
    return (
      <article className={styles.SendMovies}>
        <h2>
          J’ai choisi, <br />
          je&nbsp;partage&nbsp;!
        </h2>
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
                {allNewFriends.map((newFriend, index) => (
                  <input
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    type="email"
                    id="listEmails"
                    name="listEmails"
                    placeholder="email@email.fr"
                    value={newFriend}
                    onChange={(event) =>
                      this.handleChangeEmailFriends(event, index)
                    }
                  />
                ))}
                <button
                  type="button"
                  onClick={this.handleAddFriend}
                  onKeyDown={this.handleAddFriendByKeyboard}
                >
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
    );
  }
}

export default SendMovies;
