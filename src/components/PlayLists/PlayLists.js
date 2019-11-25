import React from 'react';

class Collapsible extends React.Component {
    state = {
        open: false
    }
    
    togglePanel = e => {
        this.setState({open: !this.state.open})
    }
    
    render() {
        return (
            <div>
                <div onClick={(e)=>this.togglePanel(e)} className="header">
                    {this.props.title}
                </div>
                {this.state.open 
                ? 
                    (
                    <div className="content">
                        {this.props.lists.map((list,i) => 
                        <iframe width="720" height="405" 
                        src={"https://www.youtube.com/embed?" + list} 
                        frameBorder="0" 
                        allowFullScreen 
                        title={"playlist" + i} />)}
                    </div>) 
                : 
                    null
                }
            </div>);
    }
}

export default Collapsible;
