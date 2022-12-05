// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 场景就是转发吗? 用这里的api接口转发到其他服务里
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
