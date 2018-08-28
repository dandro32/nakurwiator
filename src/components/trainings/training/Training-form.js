import React, {Component} from 'react';
import SectionComponent from '../../UI/section/Section';
import DatePicker from 'react-date-picker';
import PropTypes from 'prop-types';
import INITIAL_TRAINING from '../../../models/initial-training';
import InputText from '../../UI/form-elements/Input-text';

class TrainingForm extends Component {

  constructor() {
    super();
    this.state = {...INITIAL_TRAINING};
  }  
  
    static propTypes = {
        addTraining: PropTypes.func.isRequired,

    };
  
  componentWillReceiveProps(nextProps){
   this.setState({training: nextProps.training})
  }  
 
  submitForm(e) {
   e.preventDefault();
   console.log(this.state);
  }

  onInputChange(e)  {
    const {name, value} = e.target;
    this.setState(
      { [name]: value }
      );
  }

  onDateChange(date) {
    this.setState({
      date: date
    });
  }

  render() {
    console.log(this.state);
    const {date, where} = this.state;
    return(
     <form onSubmit={this.submitForm}>
        <p>test</p>
        
        <InputText label='Gdzie' name="where" value = {where} onChange={this.onInputChange.bind(this)} />
        <DatePicker
         onChange={this.onDateChange.bind(this)}
          value={date}
        />
        <button type='submit'>Zapisz</button>
      </form>
   );
  }
}

export default SectionComponent(TrainingForm);
