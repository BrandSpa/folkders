import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";
import { Editor } from 'react-draft-wysiwyg';

class TodoForm extends Component {
	state = {
		title: "",
		content: ""
	}
	
	handleChange = (field, e) => {
		this.setState({[field]: e.target.value});
	}
	
	handleSubmit = () => {
		console.log(this.state);
	}

	handleEditorChange = (state) => {
		console.log('state:', state, state.getCurrentInlineStyle());
	}

	uploadImageCallBack = (e) => {
		return new Promise((resolve, reject) => {
			return resolve({ data: { link: "https://avatars2.githubusercontent.com/u/1097809?v=3&s=40" } });
		})
	}

	render() {
		return (
			<form action="">
			<input 
				placeholder="Title"
				type="text" 
				className="form-control"
				onChange={this.handleChange.bind(null, 'title')}
			/>
			<div style={{background: "#fff", margin: '20px 0', color: "#333"}}>
			  <Editor
          toolbarClassName="task-toolbar"
          wrapperClassName="task-wrapper-medium"
          editorClassName="task-editor"
					onEditorStateChange={this.handleEditorChange}
          toolbar={{
            options: ['inline', 'list', 'emoji', 'image', 'remove'],
              inline: {
                options: ['bold', 'italic'],
              },
							image: { uploadCallback: this.uploadImageCallBack }
            }}
        />
			</div>
			<button className="btn" onClick={this.handleSubmit}>Add</button>
		</form>
		)
	}
}

export default TodoForm;