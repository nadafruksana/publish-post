import React from 'react'
import {connect} from 'react-redux'
import {addData} from '../action/postAction'
import styled from 'styled-components'

const Button = styled.button`

  background:blue;
  font-color:white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  margin-left:3em;
  height:3em;
`;
const Label=styled.div`
color:blue;
margin-left:0.5em;
`;
const Input=styled.div`
margin-left:0.5em;
height:2em;
width:6em;
`;
const Head = styled.div`
display:block;
padding: 4em;
background-color:lightgray;
margin-top:6em;
align-items:center;
align-content: center;
margin-right: 3em;
margin-left: 3em;
`;

class Post extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            title: this.state.title, 
            text: this.state.text
        }
        this.props.dispatch(addData(formData))
        this.setState({
            title: '',
            text: ''
        })
        console.log('newPost', formData)
    }

    render() {
        console.log(this.state)
        return (
            <div >
                
                <form onSubmit={this.handleSubmit}> 

                        <Head >
                        <h2> Add Post </h2> 
                           <Label> <label htmlFor='title'> Title </label> </Label>
                           <Input> <input type='text' 
                                    id='title'
                                    placeholder= 'Enter Title' 
                                    name='title'
                                    value={this.state.title} 
                                    required
                                    onChange={this.handleChange} 
                                     /></Input>
                        
                           <Label><label htmlFor='text'> Text </label> </Label>
                           <Input>  <textarea row='5' 
                                    col="4"
                                    id='text'
                                    placeholder= 'Enter Description'
                                    name='text'
                                    value={this.state.text} 
                                    required
                                    onChange={this.handleChange}
                                     />
                             </Input> 
                         <Button>Publish</Button>           
                        </Head>
                    </form>
                 
            
            </div> 
        )
    }
}

export default connect()(Post)

