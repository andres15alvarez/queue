import { QueueType } from './constants'
import { IModel } from './models/IModel'
import { MMCInfinite } from './models/mmCInfinite'
import { MM1Finite } from './models/mmOneFinite'
import { MM1Infinite } from './models/mmOneInfinite'
import { ModelProps, ModelResult } from './types'

export class Queue {
  private getModel(server: number, maxCapacity: number): QueueType {
    if (server == 1 && maxCapacity == 0) return QueueType.MM1_INFINITE
    if (server == 1 && maxCapacity > 0) return QueueType.MM1_FINITE
    if (server > 1 && maxCapacity == 0) return QueueType.MMC_INFINITE
    if (server > 1 && maxCapacity > 0) return QueueType.MMC_FINITE
    return QueueType.MM1_INFINITE
  }

  public calculate({
    lambda,
    mu,
    servers,
    maxCapacity,
    iterations
  }: ModelProps): ModelResult {
    if (!servers) {
      servers = 1
    }
    if (!maxCapacity) {
      maxCapacity = 0
    }
    let calculator: IModel
    const type = this.getModel(servers, maxCapacity)
    switch (type) {
      case QueueType.MM1_INFINITE:
        calculator = new MM1Infinite()
        return calculator.calculate({ lambda, mu, iterations })
      case QueueType.MMC_FINITE:
        calculator = new MM1Finite()
        return calculator.calculate({ lambda, mu, maxCapacity })
      case QueueType.MMC_INFINITE:
        calculator = new MMCInfinite()
        return calculator.calculate({ lambda, mu, servers, iterations })
      default:
        calculator = new MM1Infinite()
        return calculator.calculate({ lambda, mu, iterations })
    }
  }
}
