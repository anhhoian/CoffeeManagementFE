import React from 'react';
import AddRecordDialog from './AddRecordDialog';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import GlobalFilter from './GlobalFilter';
import IconButton from '@material-ui/core/IconButton';
import { lighten, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(0),
		paddingRight: theme.spacing(0),
	},
	highlight:
		theme.palette.type === 'light'
			? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			  }
			: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark,
			  },
	title: {
		flex: '1 1 100%',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
}));

const TableToolbar = (props) => {
	const classes = useToolbarStyles();
	const {
		numSelected,
		initialRecord,
		fieldsForm,
		addRecordHandler,
		deleteRecordHandler,
		tableName,
		preGlobalFilteredRows,
		setGlobalFilter,
		globalFilter,
	} = props;
	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			<AddRecordDialog initialRecord={initialRecord} fieldsForm={fieldsForm} addRecordHandler={addRecordHandler} />
			{numSelected > 0 ? (
				<Typography className={classes.title} color='inherit' variant='subtitle1'>
					{numSelected} selected
				</Typography>
			) : (
				<Typography className={classes.title} variant='h6' id='tableTitle'>
					{tableName}
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title='Delete'>
					<IconButton aria-label='delete' onClick={deleteRecordHandler}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
			)}
		</Toolbar>
	);
};

TableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
	initialRecord: PropTypes.object.isRequired,
	fieldsForm: PropTypes.func.isRequired,
	addRecordHandler: PropTypes.func.isRequired,
	deleteRecordHandler: PropTypes.func.isRequired,
	setGlobalFilter: PropTypes.func.isRequired,
	preGlobalFilteredRows: PropTypes.array.isRequired,
	globalFilter: PropTypes.string.isRequired,
};

export default TableToolbar;
