'use babel';

import ReadfileView from './readfile-view';
import { CompositeDisposable } from 'atom';
const fs = require("fs")
export default {

  readfileView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.readfileView = new ReadfileView(state.readfileViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.readfileView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'readfile:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.readfileView.destroy();
  },

  serialize() {
    return {
      readfileViewState: this.readfileView.serialize()
    };
  },

  toggle() {
    console.log('Readfile was toggled!');
    // Synchronous read

    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
