import { ModelProps, ModelResult, Probability } from '../types'
import { IModel } from './IModel'

export class MM1Finite implements IModel {
  public calculate({ lambda, mu, maxCapacity }: ModelProps): ModelResult {
    if (!maxCapacity) {
      throw new Error('Max Capacity is required for finite model')
    }
    const rho = lambda / mu
    const p0 = 1 - rho / (1 - Math.pow(rho, maxCapacity + 1))
    const Pn: Probability[] = []
    for (let i = 1; i < maxCapacity; i++) {
      const Pi = p0 * Math.pow(rho, 1)
      Pn.push({
        probability: Pi,
        cummulative: Pn[i - 1].cummulative + Pi
      })
    }
    const lambdaLost = lambda * Pn[maxCapacity].probability
    const lambdaEff = lambda - lambdaLost
    const rhoEff = lambdaEff / mu;
    const top =
      rhoEff *
      (1 -
        (maxCapacity + 1) * Math.pow(rhoEff, maxCapacity) +
        maxCapacity * Math.pow(rhoEff, maxCapacity + 1))
    const bottom = (1 - rhoEff) * (1 - Math.pow(rhoEff, maxCapacity + 1))
    const L = top / bottom
    const W = L / lambdaEff
    const Wq = W - 1 / mu
    const Lq = lambdaEff * Wq
    

    return {
      L,
      Lq,
      W,
      Wq,
      Pn
    }
  }
}
