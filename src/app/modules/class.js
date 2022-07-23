export default class List {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];
  }
}