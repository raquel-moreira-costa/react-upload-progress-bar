import React from 'react'
import { connect } from 'react-redux'
import { setUploadFile } from './redux/uploadFile/uploadFile.actions'
import UploadProgress from './components/UploadProgress/UploadProgress'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'


function App(props) {
  const handleAttachFIle = e => {
    // could do some validation for the attached file here
    props.setUploadFile(e.target.files)
    e.target.value = '' // to clear the current file
  }

  return (
    <div>
      <Header/>
        <main>
        <input type="file" multiple onChange={handleAttachFIle} />
      <UploadProgress />
    </main>
    <Footer/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files)),
})

export default connect(null, mapDispatchToProps)(App)
