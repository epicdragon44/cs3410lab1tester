type seededRand = (floor: number, ceiling: number, seed: number) => number;
type normRand = (floor: number, ceiling: number) => number;

export default class RandomUtils {
    /**
     * Extremely simple algorithm to generate a random number between 0 and 1, based on a seed number.
     */
    static seededRandomFloat: seededRand = (floor, ceiling, seed) => {
        var x = Math.sin(seed++) * 10000;
        let zeroToOne = x - Math.floor(x);
        return zeroToOne * (ceiling - floor) + floor;
    };

    /**
     * Takes a floor and ceiling and returns a random number between them, inclusive
     */
    static randomInt: normRand = (floor, ceiling) => {
        return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
    };

    /**
     * Takes a floor and ceiling and returns a random number between them, inclusive, based on a seed number
     */
    static seededRandomInt: seededRand = (floor, ceiling, seed) => {
        return (
            Math.floor(
                RandomUtils.seededRandomFloat(0, 1, seed) *
                    (ceiling - floor + 1)
            ) + floor
        );
    };

    /**
     * Returns a random float between min and max
     */
    static randomFloat: normRand = (floor, ceiling) => {
        return Math.random() * (ceiling - floor) + floor;
    };
}
