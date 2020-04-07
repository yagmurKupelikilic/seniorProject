import Slider from '@farbenmeer/react-spring-slider';

const App = () => {
	const onSlideChange = index => console.log(`changed to slide ${index}`);

	const BulletComponent = ({onClick, isActive}) => (
		<li
			style={{
				width: '25px',
				height: '25px',
				backgroundColor: 'red',
				margin: '0 2px',
				opacity: isActive && '0.5'
			}}
			onClick={onClick}
		/>
	);

	BulletComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		isActive: PropTypes.bool.isRequired
	};

	const ArrowComponent = ({onClick, direction}) => {
		return (
			<div
				style={{
					border: '1px solid black',
					padding: '1em',
					backgroundColor: 'white'
				}}
				onClick={onClick}
			>
				{direction}
			</div>
		);
	};

	ArrowComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		direction: PropTypes.string.isRequired
	};


	return (
		<Slider 
			activeIndex={2} 
			auto 
			hasBullets 
			BulletComponent={BulletComponent}
			ArrowComponent={ArrowComponent}
			onSlideChange={onSlideChange}
			>
				<div>child 1</div>
				<div>child 2</div>
				<div>child 3</div>
		</Slider>
	)
}