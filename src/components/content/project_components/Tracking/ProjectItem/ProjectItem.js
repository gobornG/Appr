import React, { Component } from 'react';
import './projectitem.scss'
import ProjectCard from './ProjectCards/ProjectCard';
import classnames from 'classnames';

class ProjectItem extends Component {
  constructor(props){
    super(props);
    this.state ={
        isTaskInputOpen: true,
        showText: false
    }
    this.addTaskToggle = this.addTaskToggle.bind(this); 
    // this.showTextToggle = this.showTextToggle.bind(this);
}


addTaskToggle(){
  
    if(this.state.isTaskInputOpen){
        
        this.setState({
          isTaskInputOpen: false,
          showText: true
        })
    }
    else {
     
        this.setState({
          isTaskInputOpen: true,
          showText: false
        })
        
    }
}

  render() {

    let addTaskInput = classnames({
      "add-task-show": true,
      "add-task": this.state.isTaskInputOpen
  })

    let showText = classnames({
      "show-text": true,
      "hide": this.state.showText
    })
    return (
    
      <div className="project-item">
            <div className="project-item-block">
              <div className="prjt-item-inner">
                  <div className="prjt-item-header"> 
                    <label> {this.props.listName} </label>
                    <span> </span>
                  </div>
                  <div className="prjt-item-body">
                    <ul>
                    <ProjectCard  cardTitle="header V1" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Group View" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Mobile Nav Component" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Horizontal Wheel Scrolling" listName={this.props.listName} />
                    <div className={showText} onClick={this.addTaskToggle}><label> Add a task... </label></div>
                      
                     
                    </ul>
                  </div>
                  <div className="prjt-item-footer" >
                    <div className={addTaskInput} >
                     
                      <textarea type="text"/>
                      <div className="list-btn-set">
                        <button> Save </button>
                        <button onClick={this.addTaskToggle}> Close </button>
                      </div>
                    </div>
                      
                    </div>
                  </div>
            </div>
            </div>

    

                      
                  

   
    );
  }
}

export default ProjectItem;

{/* <div className="dotmenu--open">
                    <div className="pop-over-menu">
                        <div className="pop-over-menu-wrapper">
                            <div className="menu-header">
                              <span className="menu-placeholder"></span>
                              <div classname="menu-title">
                                List Actions
                              </div>
                              <span className="delete-x"> &times;</span>
                            </div>
                            <ul>
                              <li>Archive This List</li>
                            </ul>
                        </div>
                    </div>
                    </div> */}