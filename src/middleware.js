export { default } from "next-auth/middleware"

export const config = { matcher: ["/admin", "/admin/work", "/admin/work/add"] }