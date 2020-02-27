// api url provided by Virail
export function API_DATA (day) {
    let api = `https://www.virail.com/virail/v7/search/en_us?from=c.3173435&to=c.3169070&lang=en_us&dt=${day}&currency=EUR&adult_passengers=2`;

    return api;
};