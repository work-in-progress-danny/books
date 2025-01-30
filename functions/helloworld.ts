import { Response } from "@cloudflare/workers-types"
import type { PagesFunction } from "@cloudflare/workers-types"

export const onRequestPost: PagesFunction = async ({ env }) => {
	return new Response("Hello, world!")
}
