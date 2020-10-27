import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
 * TODO: Card function should have: 
 * 1. Relevant link or picture
 * 2. GitHub link if applicable
 * 3. Description only if clicked
 * 4. Animation to expand card to cover screen
 * 4.a Expansion should be limited to card at the front of carousel.
 * 5. Animation and button to revert card to see other projects
 * 6. Easy to integrate into a carousel functionality
 */
export class Card extends React.Component {
    /**
     * Props will include Card title, Github enabled, imgsrc
     * State expanded will be disabled at first
     */
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }
    toggleExpand() {
        if(!this.state.expanded) {
            // TODO: Expand state
            this.state.expanded = true;
        } else {
            // TODO: Revert state
            this.state.expanded = false;
        }
    }
    render() {
        return (
            <div onClick={this.toggleExpand} >
                <img /* Project image, specify this as a parameter for more modularity */ />
                <img /* GitHub link if enabled within card (parametrize this too) */ />
                /* Also make a back button that reverts to unexpanded visible on expand */
            </div>
        );
    }
}
