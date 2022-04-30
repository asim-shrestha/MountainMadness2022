import {FunctionComponent} from "react";

type IconButtonProps = {
	iconUrl: string,
	text: string
}

const IconButton: FunctionComponent<IconButtonProps> = ({iconUrl, text}) => {
	return (
		<div className="d-flex align-items-center">
			{ iconUrl == "" ? "" : <img alt="icon-button" src={iconUrl} height="30px"/> }
			<p className={"font-weight-bold m-2 mr-3"} style={{fontSize: "0.85rem"}}>{text.toUpperCase()}</p>
		</div>
	)
}


export default IconButton;