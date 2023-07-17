import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

import { useAppSelector, useAppDispatch } from "../hook/store";
import { UserId, deleteUserById } from "../store/user/slice";

import { RemoveUser } from "../svg/removeUser";
import { EditUser } from "../svg/editUser";

export default function ListOfUser() {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const handleRemoveDispatch = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return (
		<Card>
			<Title>
				Users:
				<Badge>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Gmal</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>r
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.mail}</TableCell>
							<TableCell>{item.github}</TableCell>
							<TableCell>
								<button>
									{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<EditUser />
								</button>
								<button onClick={() => handleRemoveDispatch(item.id)}>
									<RemoveUser />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
