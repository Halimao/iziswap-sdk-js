import JSBI from "jsbi";

export namespace SwapQuery {

    export interface State {
        sqrtPrice_96: JSBI
        currentPoint: number
        liquidity: JSBI
        liquidityX: JSBI
    }

}