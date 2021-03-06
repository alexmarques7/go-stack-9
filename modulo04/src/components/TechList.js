import React, { Component } from 'react';
import TechItem from './TechItem';
class TechList extends Component {

  state = {
    newTech:'',
    techs: [
      'Node.js',
      'React',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [ ... this.state.techs,  this.state.newTech ],
      newTech: ''
    })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter( t => t != tech ) })

    console.log(this.state.techs);
  }

  render() {
    return (

      <div className="p-tech-list">
        <h1 className="e-title-primary">{this.state.newTech}</h1>

        <ul className="e-block-list">
          {this.state.techs.map( tech => 
            <TechItem 
              key={tech} 
              tech="tech" 
              onDelete={() => this.handleDelete(tech)} />
            )}
        </ul>

        <form 
          className="e-form --t-gray"
          onSubmit={this.handleSubmit}
        >
          
          <div className="e-input-text --t-black">
            <input
              className="e-input-text__field " 
              type="text" 
              onChange={this.handleInputChange} 
              value={this.state.newTech}
            />
          </div>

          <input 
            className="e-input-submit --t-primary"
            type="submit" 
            value="Adicionar"
          />

        </form>
      </div>
    )
  }
}

export default TechList;

