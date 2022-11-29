import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import profilePic from './profilePic.jpeg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
	return (
		<div style={{ marginTop: '0.5rem' }}>
			<Container style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant='h4' style={{ fontWeight: 'bold' }}>
					Dashboard
				</Typography>

				<div>
					<a href='#'>
						<img
							src={profilePic}
							alt='...'
							style={{
								borderRadius: '100%',
								width: '30px',
								marginRight: '0px',
							}}
						></img>
					</a>
					<a href='#'>
						<NotificationsNoneIcon />
					</a>
				</div>
			</Container>
		</div>
	);
};

export default Header;
