import ComRoute from './ComRoute';
import DefaultRoute from './DefaultRoute';
import MixRoute from './MixRoute';

const App = () => {
	return (
		<>
			<h3>Comp Library Check</h3>
			<DefaultRoute />
			<ComRoute />
			<MixRoute />
		</>
	);
};

export default App;
