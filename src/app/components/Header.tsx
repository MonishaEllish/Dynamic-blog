import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
           Monisha Dynamic Blog
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

