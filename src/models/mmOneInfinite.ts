import { ModelProps, ModelResult, Probability } from '../types'
import { IModel } from './IModel'

export class MM1Infinite implements IModel {
  public calculate({ lambda, mu, iterations }: ModelProps): ModelResult {
    const rho = lambda / mu
    if (rho >= 1) {
      throw new Error('Rho must be less than 1')
    }
    const p0 = 1 - rho
    const L = rho / p0
    const W = 1 / (mu - lambda)
    const Wq = W - 1 / mu
    const Lq = Math.pow(rho, 2) / p0
    const Pn: Probability[] = [
      {
        probability: p0,
        cummulative: p0
      }
    ]
    if (iterations) {
      for (let i = 1; i <= iterations; i++) {
        const Pi = p0 * Math.pow(rho, i)
        Pn.push({
          probability: Pi,
          cummulative: Pn[i - 1].cummulative + Pi
        })
      }
    }

    return {
      L,
      Lq,
      W,
      Wq,
      Pn
    }
  }
}
