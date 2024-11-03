import { ModelProps, ModelResult } from '../types'

export abstract class IModel {
  public abstract calculate({
    lambda,
    mu,
    servers,
    maxCapacity,
    iterations
  }: ModelProps): ModelResult
}
