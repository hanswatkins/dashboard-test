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
				<Grid container spacing={9}>
					<Grid xs={5}>
						<Container
							className='container1'
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
								<Typography
									variant='h5'
									style={{
										position: 'absolute',
										marginLeft: '9rem',
										marginTop: '2rem',
										color: '#797979',
										fontWeight: 'bold',
									}}
								>
									Ages
								</Typography>
								<FormControl fullWidth sx={{ textSize: '1rem' }}>
									<Select
										variant='standard'
										style={{
											width: '40%',
											textAlign: 'center',
											color: '#797979',
										}}
										defaultValue='Men'
										label='Demographic'
									>
										<MenuItem value='Men'>
											<Typography variant='h5' style={{ fontWeight: 'bold' }}>
												Men
											</Typography>
										</MenuItem>
										<MenuItem value='Women'>
											<Typography style={{ fontWeight: 'bold' }} variant='h5'>
												Women
											</Typography>
										</MenuItem>
										<MenuItem value='Kids'>
											<Typography style={{ fontWeight: 'bold' }} variant='h5'>
												Kids
											</Typography>
										</MenuItem>
									</Select>
									<br />
									<br />
									<Select defaultValue='18 - 27' label='Age'>
										<MenuItem  value='18 - 27'>
											18 - 27
										</MenuItem>
										<MenuItem  value='27 - 45'>
											27 - 45
										</MenuItem>
										<MenuItem  value='45 - 65'>
											45 - 65+
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Container>

						<Container
							className='container2'
							sx={{
								backgroundColor: '#92bc2e',
								height: '60vh',
								color: 'white',
								padding: '2rem',
							}}
						>
							<Typography
								className='demographicText'
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
							<Grid container spacing={2} sx={{ height: '100%' }}>
								<Grid xs={7}>
									<Container sx={{ fontSize: '2rem' }}>
										<Typography
											className='commonlyShopped'
											variant='h5'
											style={{
												color: '#797979',
												fontWeight: 'bold',
												marginBottom: '2rem',
											}}
										>
											Commonly shopped categories
										</Typography>
									</Container>
									<Box
										className='chart'
										sx={{
											backgroundColor: '#f0f0f0',
											width: '300px',
											height: '300px',
											borderRadius: '50%',
											border: '5px solid black',
											outlineOffset: '-50px',
											outline: '5px solid black',
										}}
									>
										<Typography
											className='chartInnerText'
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
											<Typography
												className='perfumesFragrances'
												variant='body1'
												style={{ marginLeft: '3rem' }}
											>
												Perfumes and <br /> Fragrances
												<KeyboardArrowRightIcon />
											</Typography>
										</Box>
									</a>

									<Box className='highestSegmentBox'>
										<Typography
											className='highestSegment'
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
									<Typography className='percent' variant='h1'>
										85%
									</Typography>
								</Grid>

								<Grid>
									<Grid xs={7}>
										<Typography className='purchasesOnline' variant='body1'>
											of all Purchases were online
										</Typography>
										<Container
											className='graphs'
											style={{
												width: '90px',
												display: 'flex',
												justifyContent: 'space-between',
												marginTop: '50%',
											}}
										>
											<Box
												style={{
													width: '20px',
													height: '40px',
													backgroundColor: '#327d9c',
												}}
											></Box>
											<Box
												style={{
													width: '20px',
													height: '90px',
													marginTop: '-50px',
													backgroundColor: '#235291',
												}}
											></Box>
										</Container>
									</Grid>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
