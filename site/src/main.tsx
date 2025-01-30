import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { IndexPage } from "./pages/index/IndexPage.tsx"

import "./index.css"

// biome-ignore lint: no-null-assertion
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<IndexPage />
	</StrictMode>,
)
