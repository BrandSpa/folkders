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

	handleEditorChange = (e) => {

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
				type="text" 
				className="form-control"
				onChange={this.handleChange.bind(null, 'title')}
			/>
			<div style={{background: "#fff", margin: '20px 0'}}>
			  <Editor
            toolbarClassName="demo-toolbar"
            wrapperClassName="demo-wrapper-medium"
            editorClassName="demo-editor"
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