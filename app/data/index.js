import populate from './dataGenerator'
import users from './raw/users'
import articles from './raw/articles'
import notifications from './raw/notifications'
import conversations from './raw/conversations'
import cards from './raw/cards'
import _ from 'lodash'
import * as Services from './services'


class DataProvider {

  getUser(id = 1) {
    return _.find(users, x => x.id == id);
  }

  getUsers() {
    return users;
  }

  getNotifications() {
    return notifications;
  }

  getArticles(type = 'article') {
    return _.filter(articles, x => x.type == type);
  }

  getArticle(id) {
    return _.find(articles, x => x.id == id);
  }


  getConversation(userId = 1) {
    return _.find(conversations, x => x.withUser.id == userId);
  }

  getChatList() {
    return conversations;
  }

  getComments(postId = 1) {
    return this.getArticle(postId).comments;
  }

  getCards() {
    return cards;
  }

  populateData() {
    populate();
  }
  ///////////////////////////////////////

    signUp(email,password){
        return Services.AuthService.signUpService(email,password);
    }
    login(email,password){
      return Services.AuthService.loginService(email,password);
    }


}

export let data = new DataProvider();