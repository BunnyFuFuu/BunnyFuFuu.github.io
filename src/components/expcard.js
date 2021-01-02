import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ResButton } from './resbutton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
  },
  media: {
    height: 0,
    maxHeight:300,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

/**
 * @extends { Component< { doc: ExperienceDocument }>}
 */
export default class ExpCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            image: this.props.doc.image,
        };
    }

    handleExpandClick = () => {
        this.state.expanded = !this.state.expanded;
        this.forceUpdate();
    };

    render() {
        return (
            <Card className={useStyles.root}>
                <CardHeader
                    title={this.props.doc.title}
                    subheader={this.props.doc.date}
                />
                <CardMedia
                    component="img"
                    className={useStyles.media}
                    image={this.state.image}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.doc.blurb}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                    className={useStyles.expanded}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    >
                    {this.state.expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
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
                        {this.props.doc.info.map(i => <Typography>{i}</Typography>)}
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}