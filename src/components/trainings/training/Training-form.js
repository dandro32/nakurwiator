import React, {Component} from 'react';
import SectionComponent from '../../UI/section/Section';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';

class TrainingForm extends Component {

  constructor() {
    super();
    const {training} = this.props;
    this.state = {training: training};
  }  
  
    static propTypes = {
        addTraining: PropTypes.func.isRequired,
        training: PropTypes.object.isRequired
    };

  componentDidMount() {
   
  } 

  componentWillReceiveProps(){
  }  
 

  submitForm(e) {
   e.preventDefault();
   console.log(this.state); 
  }

  render() {
    console.log(this.state);
    const {date, where} = this.state.training;
    return(
      <form onSubmit={this.submitForm}>
        <p>test</p>
        <input type='text' required value={where} />
      
        <DatePicker
          value={date}
        />
        <button type='submit'>Zapisz</button>
      </form>
   );
  }
}

export default SectionComponent(TrainingForm);
