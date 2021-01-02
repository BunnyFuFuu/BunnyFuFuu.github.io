import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ResButton = withStyles({
    root: {
        font: 'Roboto',
        borderRadius: 10,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        background: '#006daa',
        '&:hover': {
            background: "#00bfff",
            background: "linear-gradient(0deg, rgba(0,109,170,1) 0%, rgba(0,191,255,1) 100%);"
        },
    }
})(Button);
