// pages/api/healthcheck
export function GET() {
    // res.status(200).json({ status: 'Ok' });
    return Response.json({message: 'success'}, { status: 200 })
}
