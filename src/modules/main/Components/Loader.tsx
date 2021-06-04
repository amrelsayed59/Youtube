export default function Loader(props:any) {

	return (
		<div className="determinate-loader">
			<div 
			className="determinate-loader--bar" 
			style={{ "width": props.percentComplete + "%" }}></div>
		</div>
	);
}