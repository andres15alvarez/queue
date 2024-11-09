import { MMCInfinite } from '../src/models/mmCInfinite'
import { test, expect } from 'vitest'

test('MMCInfinite', () => {
  const mmcInfinite = new MMCInfinite()
  const result = mmcInfinite.calculate({ lambda: 3, mu: 1, servers: 4 })
  expect(result).toEqual({
    L: 4.528301886792453,
    Lq: 1.5283018867924527,
    W: 1.5094339622641508,
    Wq: 0.5094339622641509,
    Pn: [{ probability: 0.03773584905660377, cummulative: 0.03773584905660377 }]
  })
})
