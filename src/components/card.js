import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ResButton } from './resbutton';
import '../App.css';

/**
 * @extends { Component< { doc: CardDocument }>}
 */
export default class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            image: this.props.doc.image,
            progress: (this.props.doc.work === "In Progress") ? "statusIP": (this.props.doc.work === "Completed") ? "statusComp" : "statusPlanned",
        };
    }

    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
        this.forceUpdate();
    };

    render() {
        return (
            <Card className="infoCard">
                <CardHeader
                    title={this.props.doc.title}
                    subheader={<div className="subhead">
                                    {this.props.doc.date && <h4>Project Timeframe: {this.props.doc.date}</h4>}
                                    {this.props.doc.work && <h4 className={this.state.progress}>{this.props.doc.work}</h4>}
                                </div>}
                />
                <CardMedia
                    component="img"
                    className="infoCardMedia"
                    src={this.state.image}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.doc.blurb}
                    </Typography>
                </CardContent>
                <CardActions>
                    
                    <IconButton
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    >
                    {this.state.expanded ? <ExpandLessIcon style={{ color: '#ffffff' }}/> : <ExpandMoreIcon style={{ color: '#ffffff' }}/> }
                    </IconButton>
                    {this.props.doc.link &&
                    <ResButton 
                        variant="contained"
                        startIcon={ <GitHubIcon className="biolink"/> }
                        href={this.props.doc.link}
                        target={"_blank"}
                    >Source Code</ResButton>}
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {this.props.doc.info.map(i => <div><Typography class="infopar">{i}</Typography></div>)}
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}