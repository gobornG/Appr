import React, { Compnonent } from 'react';

class Viewfield extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const { index, viewid, viewName, imgURL, handleChangeView, submitChangeView, handleDeleteViewButton } = this.props;
        return (
            <div className="view-item">
            <section>
              <label>{(index + 1) + '.'}</label>
              <input className="view-input-name" type="text" id={viewid} value={viewName} onChange={e => handleChangeView(e, index, "name")} />
              <input className="view-input-imgurl" type="text" id={viewid} value={imgURL} onChange={e => handleChangeView(e, index, "image_url")} />
            </section>
              <button  id={viewid} onClick={e => submitChangeView(e, index)}>Save</button>
              <button className="delete-x" id={viewid} onClick={e => handleDeleteViewButton(e, index)}>&times;</button> 
          </div>
        );
    }

}

export default Viewfield;