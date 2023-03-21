import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Create Quota Triggered", req.query.slug, req.body)
    const auth = process.env.NEXT_PUBLIC_PRETIX_API
    const headers = {
        Accept: "application/json, text/javascript",
        Authorization: `Token ${auth}`,
        "Content-Type": "application/json"
    }

    const { ticketAmount, subEventId } = req.body

    const body = {
        name: `Ticket Quota`,
        size: `${ticketAmount}`,
        items: [318781],
        variations: [],
        subevent: subEventId,
        close_when_sold_out: false,
        closed: false
    }

    try {
        const response = await axios.post(
            `https://pretix.eu/api/v1/organizers/taz-zuzalu/events/event-series/quotas/`,
            body,
            { headers }
        )

        console.log("quota response: ", response)

        if (response.status === 201) {
            res.status(201).json(response.data)
        } else {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}