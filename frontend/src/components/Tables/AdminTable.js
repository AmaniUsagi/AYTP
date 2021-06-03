import React from "react";
import profile from '../../assets/img/bprofile.svg';

// components
// import TableDropdown from "../Dropdowns/TableDropdown";

const AdminTable = (props) => {

	const {id, name, email} = props.admins;
	return (
    <>
		<tr>
			<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
				<img src={profile} className="h-12 w-12 bg-white rounded-full border" alt="..." ></img>{" "}
				<span className={ "ml-3 font-bold "  } >
					{name}
				</span>
			</th>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
				{email}
			</td>
			<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
				<i class="fa fa-trash" aria-hidden="true" onClick={() => props.clickHandler(id)} style={{color:"red"}}></i>
			</td>
		</tr>
    </>
	);
};

export default AdminTable;