import React, { Component } from "react";

class Note extends Component {
  updateTitle = (e) => {
    const updateValue = e.target.value;
    const editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updateValue);
  };
  updateDescription = (e) => {
    const updateValue = e.target.value;
    const editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updateValue);
  };
  clickDelete = () => this.props.remove(this.props.note.id);
  render() {
    return (
      <div>
        <li className="note">
          <input
            type="text"
            placeholder="Title"
            value={this.props.note.title}
            onChange={this.updateTitle}
            className="note__title"
          />
          <textarea
            placeholder="Description..."
            value={this.props.note.description}
            onChange={this.updateDescription}
            className="note__description"
          />
          <span onClick={this.clickDelete} className="note__delete">
            X
          </span>
        </li>
      </div>
    );
  }
}

export default Note;
