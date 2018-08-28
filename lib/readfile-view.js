'use babel';
var fs = require("fs")
export default class ReadfileView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('readfile');

    // Create message element
    const message = document.createElement('div');
    var data = fs.readFileSync('input.txt');
    console.log("Synchronous read: " + data.toString());
    console.log("Program Ended");
    message.textContent = data.toString() ;
    fs.writeFileSync('input.txt',"Adding the data")
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
