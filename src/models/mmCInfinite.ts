import { ModelProps, ModelResult, Probability } from '../types'
import { factorial } from '../utils'
import { IModel } from './IModel'

export class MMCInfinite implements IModel {
  public calculate({ lambda, mu, servers, iterations }: ModelProps): ModelResult {
    const rho = lambda / mu
    if (!servers) {
      throw new Error('Servers must be greater than 0')
    }
    if (rho / servers >= 1) {
      throw new Error('Rho must be less than 1')
    }
    let p0 = 0
    for (let i = 0; i < servers; i++) {
      p0 += Math.pow(rho, i) / factorial(i)
    }
    p0 += (Math.pow(rho, servers) / factorial(servers)) * (1 / (1 - rho / servers))
    p0 = 1 / p0
    const Lq =
      (p0 * Math.pow(rho, servers + 1)) /
      (factorial(servers - 1) * Math.pow(servers - rho, 2))
    const L = Lq + rho
    const W = L / lambda
    const Wq = Lq / lambda
    const Pn: Probability[] = [
      {
        probability: p0,
        cummulative: p0
      }
    ]
    if (iterations) {
      for (let i = 1; i <= iterations; i++) {
        let Pi = 0
        if (i < servers) {
          Pi = (Math.pow(rho, i) / factorial(i)) * p0
        } else {
          Pi =
            (Math.pow(rho, i) / (factorial(servers) * Math.pow(servers, i - servers))) *
            p0
        }
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
