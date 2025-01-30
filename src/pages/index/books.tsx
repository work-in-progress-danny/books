import { useState } from "react"
import { NewBookForm } from "./newBookForm"
import type { Book } from "../../types"

const Info = ({ title, value }: { title: string; value: string }) => {
	return (
		<p className="flex gap-1 items-center">
			<span className="text-xs opacity-50">{title}: </span>
			{value}
		</p>
	)
}

export const Books = () => {
	const books: Book[] = []
	const [showNewBookForm, setShowNewBookForm] = useState(false)

	return (
		<div className="flex flex-col w-full">
			{showNewBookForm ? (
				<NewBookForm />
			) : (
				<button
					type="button"
					onClick={() => setShowNewBookForm(true)}
					className="underline"
				>
					add
				</button>
			)}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1080px] w-full">
				{books.map((book) => (
					<div key={book.ISBN} className="flex flex-col pb-10">
						<button
							type="button"
							onClick={() => {}}
							className="underline p-0 m-0 text-xs self-end pb-1"
						>
							edit
						</button>
						<div key={book.ISBN} className="flex flex-col gap-2 border-t">
							<p className="capitalize font-chomksy font-chomsky text-3xl w-full border-t">
								{book.title}
							</p>
							<img
								height="200"
								src={`https://covers.openlibrary.org/b/isbn/${book.ISBN}-M.jpg`}
								alt={book.title}
								className="h-56 w-min aspect-auto self-center"
							/>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href={`https://openlibrary.org/isbn/${book.ISBN}`}
								className="opacity-50 underline text-xs"
							>
								Open library reference
							</a>
							<Info title="ISBN" value={book.ISBN} />
							<Info title="Author" value={book.author} />
							<Info title="Read" value={book.read ? "Yes" : "No"} />
							<Info title="Source" value={book.source} />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
