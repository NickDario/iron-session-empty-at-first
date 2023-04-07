import { sessionOptions } from './lib/session';
import { getIronSession } from 'iron-session/edge';
import { NextResponse } from 'next/server'

export const config = {
    matcher: [
        '/((?!_next/static|favicon.ico|assets).*)'
    ]
}
/**
 * 1. Load session
 * 2. Authenticate session or reroute
 */

export async function middleware(req) {
    const res = NextResponse.next()
    console.log('setting session')
    let session = await getIronSession(req,res,sessionOptions)
    session.testCheckValue = "I'm set"
    await session.save()
    console.log(session)
    return  res
}

