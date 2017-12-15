import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import './features.scss';
import Header from '../../../Header/Header';
import { findProjectFeatures } from '../../../../services/project.feature.services';


class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main-fix">
                    <ProjectSetupSidebar userid={userid} projectid={projectid}/>
                    <div className="features-container">
                        <div className="container-wrapper">
                            <div className="project-section-header">
                                <label>Features</label>
                            </div>
                                <div className="features-area drop-shadow">
                                    <div className="features-wrapper">
                                        <div className="features-list">

                                        </div>
                                        <div className="features-footer">
                                        <button className="add-button"> <span/> Add Feature </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;