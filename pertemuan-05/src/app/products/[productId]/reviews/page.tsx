import Link from "next/link";

export default function ProductList() {
    return (
        <div>
            <h1>Review List</h1>
            <h2><Link href={`reviews/1`}>Review 1</Link></h2>
            <h2><Link href={`reviews/2`}>Review 2</Link></h2>
            <h2><Link href={`reviews/3`}>Review 3</Link></h2>
        </div>
    )
}