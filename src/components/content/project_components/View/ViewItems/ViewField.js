import React, { Compnonent } from 'react';

class Viewfield extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className="view-item" key={`idea-${index}`}>
            <section>
              <label>{(index + 1) + '.'}</label>
              <input className="view-input-name" type="text" id={view.id} value={view.name} onChange={e => this.handleChangeView(e, index, "name")} />
              <input className="view-input-imgurl" type="text" id={view.id} value={view.image_url} onChange={e => this.handleChangeView(e, index, "image_url")} />
            </section>
              <button  id={view.id} onClick={e => this.submitChangeView(e, index)}>Save</button>
              <button className="delete-x" id={view.id} onClick={e => this.handleDeleteViewButton(e, index)}>&times;</button> 
          </div>
        );
    }

}

export default Viewfield;