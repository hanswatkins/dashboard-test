import Container from '@mui/material/Container';
import {
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './Header';

export default function BasicGrid() {
	return (
		<Container>
			<Header />
			<Box sx={{ marginTop: '2em' }}>
				<Grid container spacing={6}>
					<Grid xs={5}>
						<Container
							sx={{
								backgroundColor: '#f0f0f0',
								height: '20vh',
								marginBottom: '3rem',
								borderRadius: '100px',
							}}
						>
							<Box
								sx={{
									paddingLeft: '3rem',
									paddingRight: '3rem',
									paddingTop: '1rem',
								}}
							>
								<FormControl
									fullWidth
									sx={{ textSize: '2rem' }}
									variant='standard'
								>
									<InputLabel sx={{ fontSize: '2rem' }}>
										Men Ages....
									</InputLabel>
									<Select sx={{ paddingTop: '6rem' }} label='Age'>
										<MenuItem sx={{ fontSize: '2rem' }} value={18 - 27}>
											18 - 27
										</MenuItem>
										<MenuItem sx={{ fontSize: '2rem' }} value={27 - 45}>
											27 - 45
										</MenuItem>
										<MenuItem sx={{ fontSize: '2rem' }} value={45 - 65}>
											45 - 65+
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Container>

						<Container
							sx={{
								backgroundColor: '#92bc2e',
								height: '60vh',
								color: 'white',
								padding: '2rem',
							}}
						>
							<Typography
								variant='h1'
								sx={{ fontSize: '3.3rem', fontWeight: 'bold' }}
							>
								This demographic can be benefitted by ...
							</Typography>
						</Container>
					</Grid>
					<Grid xs={7}>
						<Container
							sx={{
								backgroundColor: '#f0f0f0',
								height: '60vh',
								marginBottom: '3rem',
							}}
						>
							<Grid container spacing={1} sx={{ height: '100%' }}>
								<Grid xs={7}>
									<Box sx={{ padding: '2rem', fontSize: '1.5rem' }}>
										Commonly shopped categories
									</Box>
									<Box
										sx={{
											backgroundColor: '#f0f0f0',
											width: '300px',
											height: '300px',
											borderRadius: '50%',
											marginTop: '3rem',
											border: '5px solid black',
											outlineOffset: '-50px',
											outline: '5px solid black',
										}}
									>
										<Typography
											variant='h2'
											style={{ marginTop: '110px', marginLeft: '100px' }}
										>
											65%
										</Typography>{' '}
									</Box>
								</Grid>
								<Grid xs={5} sx={{ marginTop: '10vh' }}>
									<a
										href='#'
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<Box>
											Perfumes and Fragrances
											<KeyboardArrowRightIcon />
										</Box>
									</a>

									<Box>
										<Typography
											variant='h5'
											style={{
												color: '#bf2997',
												marginTop: '20vh',
												fontWeight: 'bold',
												textAlign: 'center',
											}}
										>
											The highest segment of this category is cologne
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Container>
						<Container sx={{ backgroundColor: '#f0f0f0', height: '20vh' }}>
							<Grid container spacing={1}>
								<Grid xs={5}>
									<Typography variant='h1'>85%</Typography>
								</Grid>

								<Grid xs={7}>
									<Typography variant='body1' style={{ marginTop: '2rem' }}>
										of all Purchases were online
									</Typography>

									<Container
										style={{
											width: '90px',
											display: 'flex',
											justifyContent: 'space-between',
											position: 'fixed',
											marginTop: '30px',
											marginLeft: '3rem',
										}}
									>
										<Box
											style={{
												width: '20px',
												height: '40px',
												marginTop: '50px',
												backgroundColor: '#327d9c',
											}}
										></Box>
										<Box
											style={{
												width: '20px',
												height: '90px',
												backgroundColor: '#235291',
												marginBottom: '60px',
											}}
										></Box>
									</Container>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
