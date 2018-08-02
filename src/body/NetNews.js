import axios from 'axios';

export class NetNews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: null,
			result: null
		};
	}

	componentDidMount() {
		axios
			.get(`https://hn.algolia.com/api/v1/search`)
			.then(res => this.setState({ result: res.data }))
			.catch(err => this.setState({ err }));
	}

	render() {
		const { err, result } = this.state;

		return (
			<div className="page">
				{err ? (
					<div style={{ alignItems: 'center' }}>
						<h2>Something went wrong</h2>
					</div>
				) : (
					result && <NetNewsList data={result} />
				)}
			</div>
		);
	}
}
