import {FunctionComponent} from "react";

const SearchBar: FunctionComponent = () => {
	return (
		<div className="col-sm-3 my-1" >
			<div className="input-group" style={{minWidth: "10rem"}}>
				<input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Search"/>
				<div className={"input-group-append"}>
					<div className="input-group-text pl-4 pr-4">
						<img height="18px" alt="search" src="/search.png"/>
					</div>
				</div>
			</div>
		</div>
	)
}


export default SearchBar;