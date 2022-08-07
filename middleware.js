import { NextResponse, userAgent } from 'next/server'

export function middleware(request,response) {
    const {isBot} = userAgent(request)

   

    if (isBot) {
        return NextResponse.redirect(new URL('/bot', request.url))
    }
    return NextResponse.next()
}