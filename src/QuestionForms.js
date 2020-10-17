import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'


class QuestionForms extends React.Component{
    constructor(){
        super()
        this.state={
        question: '',
        answer: '',
        select : [ 'choose options','Short Answer', 'MultipleChoice', 'Checkbox' ],
        count: [],
        option: '',
    }
}

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }

    handleSelect = (e) => {
        this.setState({
            option: e.target.value
        })
    }

    handleAddOption = () => {
        this.setState({
            count: [...this.state.count, '']
        })
        
        console.log('set state', this.state.count)
    }

    

    render(){
        
        let multiple = this.state.option === 'MultipleChoice' && this.state.count.map((item, i) => {  
            console.log("multiplechoice", item) 
            return(
                <div>
                    <input type='radio' />
                    <input placeholder="Enter option" style={{width: "520px", height: "45px",  border: "none", borderBottom: "2px solid black"}} type="text" />
               
               </div>
            )
        })

        let checkBox = this.state.option === 'Checkbox' && this.state.count.map((item, i) => {
            return(
                <div>
                    <input type = 'checkbox' />
                    <input placeholder="Enter option" style={{width: "520px", height: "45px",  border: "none", borderBottom: "2px solid black"}} type="text" />
                </div>
            )
        })

        const select = this.state.select
        let selectList = select.map((ele, i)=>{
            return (
                <option key={i}> {ele} </option>
            )
        })
        
        return(
            <div className="question">
                <Container>
                <Form>

                <div style={{width:"60%",float: "left" }}>
                
                <Form.Group controlId='formBasicTitle'>
                                <Form.Control className='mt-5'
                                    type='text' 
                                    name='question'
                                    value={this.state.question} 
                                    onChange={this.handleChange} 
                                    placeholder='question' 
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                <br/>

                {
                    this.state.option === 'Short Answer' && <Form.Control size='lg' as="textarea" placeholder="Enter Explanation" type='text' className='input' />  
                }
                { 
                    this.state.option === 'MultipleChoice' && (
                                                            <div> <input type='radio' />
                                                             <input placeholder="Enter option" style={{width: "520px", height: "45px",  border: "none", borderBottom: "2px solid black"}} type="text" />
        
                                                            </div>
                                                        )
                }
                {multiple}
                {
                    this.state.option === 'MultipleChoice' && this.state.count.length !== 4 ? (<Button className="mt-4" onClick={this.handleAddOption}>Add option</Button>) : ""
                }
               { 
                    this.state.option === 'Checkbox' && (
                                                            <div> <input type='checkbox' />
                                                             <input placeholder="Enter option" style={{width: "520px", height: "45px", border: "none", borderBottom: "2px solid black"}} type="text" />
                                                            </div>
                                                        )
                }
                {checkBox}
                {
                    this.state.option === 'Checkbox' && this.state.count.length !== 4 ? <Button className="mt-4" onClick={this.handleAddOption}>Add option</Button> : ''
                }
                </div>
                    <div className='mt-5' style={{width: "30%", float: "right"}}>
                        <Form.Control as="select" onChange={this.handleSelect} name='option' className='select'>
                            {selectList}
                        </Form.Control><br/>
                    </div>
                </Form>

                </Container>
            </div>
        )
    }
}

export default QuestionForms