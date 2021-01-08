import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ResButton = withStyles({
    root: {
        font: 'Roboto',
        borderRadius: 10,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 8px',
        background: 'rgba(34, 34, 34, 0.6)',
        backdropFilter: 'blur(5px)',
        '&:hover': {
            background: "#00bfff",
            transition: 'all 0.25s cubic-bezier(.17,.67,.83,.67)',
        },
    }
})(Button);
