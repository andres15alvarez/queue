import { Queue } from '../src/queue'
import { test, expect } from 'vitest'

test('Queue', () => {
  const queue = new Queue()
  const result = queue.calculate({ lambda: 5, mu: 8 })
  expect(result).toEqual({
    L: 1.6666666666666667,
    Lq: 1.0416666666666667,
    W: 0.3333333333333333,
    Wq: 0.20833333333333331,
    Pn: [{ probability: 0.375, cummulative: 0.375 }]
  })
})
