import React from 'react';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Folkders</title>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

    </Head>
    <div className="container-fluid">
  		<div id="app"></div>
  	</div>

    <style jsx>{`
      html, body {
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        min-height: 100%;
      }
      body {
        background: #1F293B;
         width: 100%;
         margin: 0%;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
      }

      a:hover, a:focus {
        text-decoration: none
      }

      p {
        font-size: .8rem;
      }

      .form-control {
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(255,255,255,.5);
        border-radius: 0;
        transition: all 300ms;
        color: #fff;
      }

      .form-control:hover, .form-control:focus {
        border-bottom: 1px solid rgba(255,255,255,1);
      }

      section::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      section::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 1em;
        cursor: grab;
      }

      section::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
      }

      .form-control:hover, .form-control:focus {
        background: transparent;
        color: #fff;
      }

      .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #fff;
      }

      .form-control::-moz-placeholder { /* Firefox 19+ */
        color: #fff;
      }

      .form-control:-ms-input-placeholder { /* IE 10+ */
        color: #fff;
      }

      .form-control:-moz-placeholder { /* Firefox 18- */
        color: #fff;
      }

      .task-editor {
        min-height: 100px;
        padding: 0 20px;
      }

      button {
        cursor: pointer
      }
      ul {
        padding: 0
      }

      li {
        list-style: none
      }

      .clients {
        background: rgba(255, 255, 255, 0.01);
        padding: 20px 0;
        height: 91vh
      }

      .clients > header {
        padding: 0 10px;
      }

      .clients > header h5 {
        display: inline-block;
      }

      .clients > header .btns {
        display: inline-block;
      }

      .clients__item a {
        display: block;
        padding: 10px;
      }

      .clients__item--active a {
        color: #fff;
        background: rgba(0, 0, 0, 0.05);
      }

      .projects {
        background: rgba(0, 0, 0, 0.1);
        padding: 20px 0;
        height: 91vh
      }

      .projects > header {
        padding: 0 10px;
      }

      .projects > header h5 {
        display: inline-block;
      }

      .projects > header .btns {
        display: inline-block;
      }

      .projects__item a {
        display: block;
        padding: 10px;
      }

      .projects__item__todos-count {
        float: right
      }

      .projects__item ul {
        visibility: hidden;
        height: 0;
        overflow-y: auto;
        overflow-x: none;
        max-height: 400px;
        padding: 0;
        transition: all 300ms;
      }

      .projects__item--active a {
        color: #fff;
        background: rgba(0, 0, 0, 0.07);
      }

      .projects__item--active ul {
        visibility:visible;
        height: auto;
        background: rgba(0, 0, 0, 0.07);
        padding-left: 40px;
        padding-bottom: 20px;
        transition: all 300ms;
      }

      .todos {
        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        height: 91vh
      }

      .todos-form {
        background: rgba(255, 255, 255, .9);
        padding: 20px;
      }

      .todos-form .form-control {
        border-color: #1F293B;
        color: #1F293B
      }

      .todos-form  .form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #1F293B;
      }

      .todos-form .form-control::-moz-placeholder { /* Firefox 19+ */
        color: #1F293B;
      }

      .todos-form .form-control:-ms-input-placeholder { /* IE 10+ */
        color: #1F293B;
      }

      .todos-form .form-control:-moz-placeholder { /* Firefox 18- */
        color: #1F293B;
      }

      .todos-items {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 400px;
      }

      .todo__item {
        background: rgba(255, 255, 255, .9);
        color: #333;
        margin: 20px 0;
      }

      .todo__item header {
        background: #fff;
        padding: 20px;
      }

      .todo__item__content {
        padding: 20px;
      }

      ::-webkit-scrollbar {
      width: 12px;
  }

  ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 0;
      background: rgba(0,0,0,0.3);
  }

    `}</style>
  </div>
)
