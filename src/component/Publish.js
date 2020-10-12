import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Head = styled.h1`
color:gray;
font-size:20px;
margin-top:5em;

`;

class Publish extends React.Component{
    state={
        search: ''
    }
    searchOnChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div>
            <center>
                    <Head><h2> Search </h2></Head>
                    <label htmlFor= 'search'> </label>
                    <input type= 'text' 
                            placeholder= 'Search by title'
                            id= 'search'
                            name= 'search'
                            value={this.state.search} 
                            onChange={this.searchOnChange}/>
                    <br/>
                   
                    <div className='search'>
                    {
                        this.props.posts.filter(post => post.title.includes(this.state.search)).map((ele, i)=>{
                            return(
                                <div key={i}>
                                    <div >
                                    <ul><li>
                                     <h1> {ele.title} </h1>
                                        <p>{ele.text} </p>
                                   </li> </ul>
                                       
                                    </div>   
                                </div>
                            )
                        })
                    }
                    </div>
                      </center>
                </div>
              
            )
        }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Publish)
















