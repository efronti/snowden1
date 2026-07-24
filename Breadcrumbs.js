import Link from "next/link";
export default function Breadcrumbs({items=[]}) {
  return <div className="breadcrumbs"><Link href="/">Home</Link>{items.map((item,i)=><span key={i}>/ {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</div>
}
