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
                        <iframe 
                        src={"https://www.youtube.com/embed?" + list} 
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
