import { Link } from 'gatsby';
import React from 'react';

export default function HomeNav() {
  return <div>
        <Link href="/">Home</Link>
        <Link href="/character-sheets">Character Sheets</Link>
        <Link href="/fan-art">Fan Art</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/social">Social Media</Link>
    </div>;
}
