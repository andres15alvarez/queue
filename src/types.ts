export type ModelProps = {
  lambda: number
  mu: number
  servers?: number
  maxCapacity?: number
  iterations?: number
}

export type ModelResult = {
  L: number
  Lq: number
  W: number
  Wq: number
  Pn?: {
    probability: number
    cummulative: number
  }[]
}

export type Probability = {
  probability: number
  cummulative: number
}
