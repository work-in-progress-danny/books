export type OpenLibraryBookType = {
	type: { key: "/type/edition" }
	publish_date: string
	copyright_date: string
	publish_country: string
	languages: Array<{ key: "/languages/eng" }>
	authors: Array<{ key: string }>
	other_titles: string[]
	description: string
	subjects: string[]
	title: string
	by_statement: string
	publishers: string[]
	publish_places: string[]
	pagination: string
	number_of_pages: number
	source_records: string[]
	full_title: string
	covers: number[]
	works: Array<{ key: string }>
	key: string
	identifiers: {
		goodreads: string[]
		annas_archive: string[]
	}
	classifications: Record<string, never> // Assuming empty classifications
	physical_format: string
	local_id: string[]
	ocaid: string
	isbn_10: string[]
	isbn_13: string[]
	oclc_numbers: string[]
	lc_classifications: string[]
	latest_revision: number
	revision: number
	created: {
		type: "/type/datetime"
		value: string
	}
	last_modified: {
		type: "/type/datetime"
		value: string
	}
}

export type BookEntry = {
	ISBN: string
	read: boolean
	source: string
}

export type Book = {
	author: string
	title: string
} & BookEntry
