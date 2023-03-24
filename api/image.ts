import type { VercelRequest, VercelResponse } from '@vercel/node'
import images from '../data/images.json'

export default (req: VercelRequest, res: VercelResponse) => {
  if ((images as any).image) {
    const image = (images as any).image
    const index = Math.floor(Math.random() * image.length)
    res.json(image[index])
  }
}
