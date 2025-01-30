import { useEffect, useState } from "react"
import type { OpenLibraryBookType } from "../../types"

export const NewBookForm = () => {
	const [search, setSearch] = useState(false)
	const [openLibId, setOpenLibId] = useState("")

	useEffect(() => {
		const fetchBook = async () => {
			const bookData = (await fetch(
				`https://openlibrary.org/works/${openLibId}.json`,
			).then((res) => res.json())) as OpenLibraryBookType
			console.log(bookData)
		}

		if (search) {
			fetchBook()
		}
	}, [search, openLibId])

	return (
		<div className="flex flex-col w-full sm:w-1/2">
			<p>Open Libraries Works Number</p>
			<input
				id="id"
				className="border rounded"
				type="text"
				data-1p-ignore // 1Password ignore this as a username or something
				placeholder="Open Libraries Number"
				onChange={(e) => setOpenLibId(e.target.value)}
			/>
			<button
				type="button"
				className="underline p-0"
				onClick={() => setSearch(true)}
			>
				Search
			</button>
		</div>
	)
}
