import { withIronSessionApiRoute } from "iron-session/next"
import nextConnect from "next-connect";
import { sessionOptions } from '../../lib/session';

// withIronSession
function GetSession(req, res) {
    console.log("get-session", req.session)
    try {
        return res.json(req.session)
    } catch(e) {
        return res.status(404).json({ok: false})
    }
}

const handler = nextConnect();
handler.get(withIronSessionApiRoute(GetSession, sessionOptions))
export default handler

