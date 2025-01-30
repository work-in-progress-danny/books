import { Books } from "./books"

export const IndexPage = () => (
	<div className="flex min-h-screen justify-between flex-col">
		<div className="flex flex-col p-10">
			<h1
				className="font-bold font-chomsky"
				style={{ fontSize: "15rem", lineHeight: 1 }}
			>
				Books
			</h1>
			<p className="text-sm pb-10 sm:w-1/2">
				This is a list of books I want to read, it's not really intended for
				anything but a pretty alternative to Notes on my phone
			</p>
			<Books />
		</div>
		<footer className="w-full border-dashed border-t text-xs p-5">
			<p>Made with love by Work in Progress, Danny</p>
			<a href="akd">github</a>
		</footer>
	</div>
)
