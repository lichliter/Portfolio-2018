import React from 'react';
import Grid from '@material-ui/core/Grid';
import './PostHeader.css';

class PostHeader extends React.Component {
    render() {
        return (
            <div className="post-header" style={{minHeight: 200, height: "60vh", maxHeight: 500, backgroundColor: this.props.selectedProject.color, color: "white"}}>
                <Grid container spacing={0} justify="center" alignItems="center" style={{height: "calc(100% - 10px)"}}>
                    <img alt={this.props.selectedProject.image} style={{maxWidth: "90%", maxHeight: "90%", boxShadow: "rgba(0,0,0,.2) -5px 5px 50px 4px"}} src={this.props.selectedProject.imageURL}/>
                </Grid>
            </div>
        )
    }
}

export default PostHeader;