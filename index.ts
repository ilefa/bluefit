import axios from 'axios';

const ENDPOINT = 'https://app.safespace.io/veart/socket.io/?EIO=3&transport=polling&t=NkEgHQf.0&sid='
const ENDPOINT_SID = 'https://app.safespace.io/veart/socket.io/?EIO=3&transport=polling&t=NkEgHPb'

export const getOccupancy = async (): Promise<number> => {
    let raw = await axios
        .get(ENDPOINT_SID)
        .then(res => res.data)
        .catch(_ => null);

    if (!raw) return null;
    
    let { sid } = JSON.parse(raw.substring(raw.indexOf('{')));
    let subscribe = await axios
        .post(ENDPOINT + sid, '70:42["manualoccupancy:subscribe","86fb9e11-6795-4e98-ac36-67262d509fc6"]')
        .then(res => res.data)
        .catch(_ => null);

    let occupancy = await axios
        .get(ENDPOINT + sid)
        .then(res => res.data)
        .catch(_ => null);

    if (!subscribe || !occupancy)
        return null;

    let { occupants } = JSON.parse(occupancy.substring(occupancy.indexOf('{'), occupancy.indexOf('}') + 1));
    return occupants;
}