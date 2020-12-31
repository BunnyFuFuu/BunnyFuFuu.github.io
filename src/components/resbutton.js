import Button from '@material-ui/core/Button';
import { hslToRgb, withStyles } from '@material-ui/core/styles';

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
        },
    }
})(Button);
