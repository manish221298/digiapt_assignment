import React from 'react'
import {Form, Container} from 'react-bootstrap'
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            title:'',
            description:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description
        }
        console.log('form data',formData)
    }
    render(){
        return (
            <div className='mt-5 mb-5 header'>
                <Container>
                    <div>
                        <Form  onSubmit={this.handleSubmit}>
                            <Form.Group controlId='formBasicTitle'>
                                <Form.Control  className='mt-5'
                                    type='text' 
                                    name='title'
                                    value={this.state.title} 
                                    onChange={this.handleChange} 
                                    placeholder='form title' 
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId='formBasicDescription'>
                                <Form.Control 
                                    type='text'
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    placeholder='form description'
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                        </Form>
                        </div>
                </Container>
            </div>
        )
    }
}
export default Header