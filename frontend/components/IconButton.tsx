import {FunctionComponent} from "react";

type IconButtonProps = {
	iconUrl: string,
	text: string
	normal?: boolean
}

const IconButton: FunctionComponent<IconButtonProps> = ({iconUrl, text, normal}) => {
	return (
		<div className="d-flex align-items-center">
			{ iconUrl == "" ? "" : <img alt="icon-button" src={iconUrl} height="25px"/> }
			<p className={(normal ? "" : "font-weight-bold") + " m-2 mr-3"} style={{fontSize: "0.85rem"}}>{text?.toUpperCase()}</p>
		</div>
	)
}


export default IconButton;